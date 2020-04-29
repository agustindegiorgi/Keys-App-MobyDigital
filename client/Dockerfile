FROM mhart/alpine-node:13 AS builder
WORKDIR /app
COPY . .
RUN cd /app \
	&& npm install -g @angular/cli > /dev/null \
	&& npm install \
	&& ng build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
