# From official wiremock image
FROM wiremock/wiremock:2.32.0-alpine
# Copy our stubs into the correct destination for the wiremock image
COPY ./stubs/mappings /home/wiremock/mappings

CMD ["--disable-request-logging","--no-request-journal", "--async-response-enabled", "--async-response-threads 64"]