REPO ?= github.com/suddani/wedding-frontend
TAG  ?= $(shell git rev-parse --short HEAD)
TAG_NAME ?= $(shell git name-rev --name-only HEAD)
USED_TAG := $(TAG)

define images
    docker images $(REPO)
endef
define image_ids
    $(shell docker images -q $(REPO))
endef

all: build_latest

pull:
	-docker pull $(REPO):$(TAG_NAME)_old
	-docker pull $(REPO):$(TAG_NAME)
build_latest: Dockerfile
	docker build --rm -t $(REPO):$(USED_TAG) .
	-docker rmi $(REPO):latest
	docker tag $(REPO):$(USED_TAG) $(REPO):latest
build: Dockerfile
	-docker tag $(REPO):$(TAG_NAME) $(REPO):$(TAG_NAME)_old
	docker build --rm -t $(REPO):$(TAG) .
	-docker rmi $(REPO):$(TAG_NAME)
	docker tag $(REPO):$(TAG) $(REPO):$(TAG_NAME)
push:
	docker push $(REPO):$(TAG)
	docker push $(REPO):$(TAG_NAME)
	-docker push $(REPO):$(TAG_NAME)_old
pull_dev:
	-docker pull $(REPO):$(TAG_NAME)_old_dev
	-docker pull $(REPO):$(TAG_NAME)_dev
build_dev_latest: Dockerfile-dev
	docker build --rm -t $(REPO):$(USED_TAG)_dev -f Dockerfile-dev .
	-docker rmi $(REPO):latest_dev
	docker tag $(REPO):$(USED_TAG)_dev $(REPO):latest_dev
build_dev: Dockerfile-dev
	-docker tag $(REPO):$(TAG_NAME)_dev $(REPO):$(TAG_NAME)_dev_old
	docker build --rm -t $(REPO):$(TAG)_dev -f Dockerfile-dev .
	-docker rmi $(REPO):$(TAG_NAME)_dev
	docker tag $(REPO):$(TAG)_dev $(REPO):$(TAG_NAME)_dev
push_dev:
	docker push $(REPO):$(TAG)_dev
	docker push $(REPO):$(TAG_NAME)_dev
	-docker push $(REPO):$(TAG_NAME)_dev_old

clean:
		-docker rmi -f $(call image_ids)
list:
	$(call images)

