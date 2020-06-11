# specify the bse image needed for run
FROM golang:alpine

# coppy everything from src to /go/src/app
ADD ./src /go/src/app

# set working directory to /go/src/app
WORKDIR /go/src/app

# pull in any dependencies
# RUN go mod download

# create directory which will hold source files
RUN go build -o main .

ENV PORT=3001

CMD ["/go/src/app/main"]