'''
Monthly Sales of the automotive industry.
Scraped from https://www.v3cars.com/brand-name-cars-monthly-sales
'''

from calendar import month
import pandas as pd
from bs4 import BeautifulSoup
import requests
from django.http import request
brands_url = {
    "Mahindra": "mahindra-cars-monthly-sales",
    "Maruti Arena": "maruti-arena-cars-monthly-sales",
    "Maruti Nexa": "maruti-nexa-cars-monthly-sales",
    "Tata": "tata-cars-monthly-sales",
    "Hyundai": "hyundai-cars-monthly-sales",
    "Honda": "honda-cars-monthly-sales",
    "Toyota": "toyota-cars-monthly-sales",
    "Ford": "ford-cars-monthly-sales",
    "Renault": "renault-cars-monthly-sales",
    "Volkswagen": "volkswagen-cars-monthly-sales",
    "Skoda": "skoda-cars-monthly-sales",
    "MG": "mg-cars-monthly-sales",
    "Kia": "kia-cars-monthly-sales",
    "Jeep": "jeep-cars-monthly-sales",
    "Isuzu": "isuzu-cars-monthly-sales",
    "Nissan": "nissan-cars-monthly-sales",
    "Datsun": "datsun-cars-monthly-sales",
    "Audi": "audi-cars-monthly-sales",
    "BMW": "bmw-cars-monthly-sales",
    "Mini": "mini-cars-monthly-sales",
    "Mercedes": "mercedes-cars-monthly-sales",
    "Volvo": "volvo-cars-monthly-sales",
    "Jaguar": "jaguar-cars-monthly-sales",
    "Land Rover": "land-rover-cars-monthly-sales",
    "Lexus": "lexus-cars-monthly-sales",
    "Porsche": "porsche-cars-monthly-sales",
    "Aston Martin": "aston-martin-cars-monthly-sales",
    "Maserati": "maserati-cars-monthly-sales",
    "Bentley": "bentley-cars-monthly-sales",
    "Bugatti": "bugatti-cars-monthly-sales",
    "DC": "dc-cars-monthly-sales",
    "Ferrari": "ferrari-cars-monthly-sales",
    "Mitsubishi": "mitsubishi-cars-monthly-sales",
    "Lamborghini": "lamborghini-cars-monthly-sales",
    "Force": "force-cars-monthly-sales",
}

import shutil
import csv 

def write_csv(filename,fields,rows):
    bak= filename +'.bak'
    filename = filename+'.csv'
#writing into csv
#Backing up csv file"
    try:
        shutil.copy(filename,bak)
    except:
        print("No backup created")

    with open(filename,'w') as csvfile:
        csvwriter = csv.writer(csvfile)
        csvwriter.writerow(fields)
        csvwriter.writerows(rows)

url = "https://www.v3cars.com/"
headers = ['make', 'model', 'July 2021', 'August 2021', 'September 2021', 'October 2021',
           'November 2021', 'December 2021', 'January 2022', 'February 2022', 'March 2022', 'April 2022']
matcher = {
    'July 2021': 2, 'August 2021': 3, 'September 2021': 4, 'October 2021': 5,
    'November 2021': 6, 'December 2021': 7, 'January 2022': 8, 'February 2022': 9, 'March 2022': 10, 'April 2022': 11
}

sales = []
for brand in brands_url:
    # Getting cars for a brand brand.
    page = requests.get(url+brands_url[brand])
    soup = BeautifulSoup(page.text, 'lxml')
    table = soup.find('table')
    # Finding links for cars for a single brand
    links = []
    try:
        for j in table.find_all('tr')[1:]:
            car = j.find_all('td')[0]
            links.append([car.find('a').get('href'), car.text])

    # Car wise sales
        for [link, car] in links:
            print(brand,car)
            page = requests.get(url+link)
            soup = BeautifulSoup(page.text, 'lxml')
            table = soup.find('table')
            car_sales = [brand, car]+[0]*10
            try:
                for j in table.find_all('tr')[1:]:
                    month_sales = [t.text for t in j.find_all('td')]
                    car_sales[matcher[month_sales[0]]] = month_sales[1]
            except:
                print('no data')
            sales.append(car_sales)
    except:
        print('no cars')


