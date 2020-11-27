FROM node:12-alpine

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

VOLUME [ "/api" ]
EXPOSE 3000
ENTRYPOINT [ "./entrypoint.sh" ]
