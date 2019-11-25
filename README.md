# Docker 101

## Prerequisites:
- Install Docker ([Mac](https://docs.docker.com/docker-for-mac/install/), [Windows](https://docs.docker.com/docker-for-windows/), [Linux](https://docs.docker.com/install/linux/docker-ce/ubuntu/))
- Create [dockerhub](https://hub.docker.com/) account 

### Part 1: Running docker images from dockerhub

```sh
# Pull an image from dockerhub
docker pull ubuntu

# See all images available locally (notice the size of ubuntu image)
docker images

# Start a container
docker run -i -t ubuntu bash

# see that we're indeed running linux
cat /proc/version

# exit the process (i.e. stop the container)
exit
```

You can browse other docker images on [Docker Hub](https://hub.docker.com/)


### Part 2: Building (and running) our own docker images

In `app`, we have a simple web server, built using express
```sh
# build our own image
docker build . -t docker-101-image

# start a container (from the image we built in the previous step)
docker run -p 3000:3000 docker-101-image

```

### Part 3: More `docker run` options for development
```sh
# override which command the container should run
docker run -p 3000:3000 docker-101-image npm run dev

# mount a volume from the host (our computer) onto the container
docker run -p 3000:3000 -v $(pwd):/code docker-101-image npm run dev
```

### Part 4: Running 2 docker containers
```sh
# start our app (this time with a database)
docker run -p 3000:3000 docker-101-image node server_with_db.js # this will throw an error

# start mongodb
docker run -p 27017:27017 mongo

# start our app (this time with a database)
docker run -p 3000:3000 docker-101-image node server_with_db.js # this will work now
```

### Other useful docker commands
```sh
# see list of locally available images
docker images

# see list of running containers
docker ps

# start a bash shell in a running container
docker exec -it <container-id> bash

# start a docker container
docker start <container-id>

# stop a running container
docker stop <container-id>

# push image to docker hub (you need to have a dockerhub account and you need to run docker login first)
docker push <image_name:tag>

# see all docker commands
docker --help
```