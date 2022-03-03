# k6s-load-testing


## Wiremock

### Forkunnskaper

- Du bør kjenne litt til docker, kjøre en docker deamon på maskinen din. [Linux](https://docs.docker.com/engine/install/ubuntu/) - [Mac/Windows Docker Desktop](https://www.docker.com/products/docker-desktop)
- Postman installert

### Hva gjør Dockerfile

Den henter det offisielle [wiremock imaget](https://hub.docker.com/r/wiremock/wiremock) med [Alpine-distro](https://alpinelinux.org/). Den kopierer over `./stubs` mappen og undermappene til riktig destinasjon i docker-imaget.


```
1: Bygg dockerfile

docker build . -t wiremock-test --file ./Dockerfile

2: Kjør docker-image

docker run -p 8080:8080 wiremock-test
```

 ## Hvordan virker det

 Wiremock docker imaget vårt inneholder alle filene vi har i `stubs` mappen. 

`mappings` inneholder logikken for hva som skal ses på i request, og hva som skal mappes ut i response.

`__files` inneholder response filene våre, man kan ha responsen i mappings filen, men det er mer ryddig å ha de i separate filer.

*NB:* Path til __files fra mappings må ta utgangspunkt i at man står i mappings mappen, selv om selve mappingfilen ikke ligger der.

[Wiremock - stubbing](http://wiremock.org/docs/stubbing/)

[Wiremock - request matching](http://wiremock.org/docs/request-matching/)
