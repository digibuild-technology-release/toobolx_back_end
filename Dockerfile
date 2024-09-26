# Node.js Docker image
FROM node:20.9.0

LABEL ENG R&D Team

WORKDIR /app

# Install Ubuntu dependencies
#RUN sed -i '/updates/d'  /etc/apt/sources.list

RUN apt-get update && apt-get install curl git build-essential cron nano -y

RUN npm install -g grunt-cli && npm install -g bower

RUN echo "Europe/Rome" | tee /etc/timezone

RUN dpkg-reconfigure --frontend noninteractive tzdata

COPY . ./

RUN npm install

RUN npm install forever -g

CMD ["forever", "src/server.js"]