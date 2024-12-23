#!/bin/bash

# Download sample Datasets
function download_data() {
  curl -L -o "$PWD"/$1 \
    $2
}

# Create new mongodb user
function create_user() {
  mongosh --eval "db.createUser({user: '$1', pwd: '$2', roles: ['$3']})"
}

download_data "airline-dataset.zip" "https://www.kaggle.com/api/v1/datasets/download/iamsouravbanerjee/airline-dataset"
download_data "airports.csv" "https://davidmegginson.github.io/ourairports-data/airports.csv"
download_data "runways.csv" "https://davidmegginson.github.io/ourairports-data/runways.csv"
download_data "airport-frequencies.csv" "https://davidmegginson.github.io/ourairports-data/airport-frequencies.csv"
