setwd("/run/media/lot1aus/hdd_1/Internship/Microsoft Engage/AutoSense")
cars <- read.csv("CSVs/cars_engage_2022.csv")
cars_name <- cars[,c('make','model','variant')]
brands <- data.frame(unique(cars$make))

cars$torque

sales <- read.csv("CSVs/sales_figure.csv")
features <- data.frame(names(cars))
unique(cars$fuel_system)

barplot(cars$ex.showroom_price)