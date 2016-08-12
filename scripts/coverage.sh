#!/bin/bash

istanbul cover _mocha -- bin/test
istanbul check-coverage --statement $1 --branches $1 --functions $1 --lines $1
echo $?
