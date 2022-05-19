setwd("/run/media/lot1aus/hdd_1/Internship/Microsoft Engage/AutoSense")
cars <- read.csv("CSVs/cars_engage_2022.csv")
cars_name <- cars[,c('make','model','variant')]
