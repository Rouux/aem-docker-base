FROM node:12-alpine

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

VOLUME [ "/front-end" ]
EXPOSE 4200
ENTRYPOINT [ "./entrypoint.sh" ]
