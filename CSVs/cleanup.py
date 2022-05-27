import csv
import shutil


file = open("cars_engage_2022.csv")
csvreader = csv.reader(file)
header = next(csvreader)
data = []
for row in csvreader:
    data.append(row)

file.close()

for row in data:
    if row[header.index('make')] == '':
        temp = row[header.index('model')].split()
        row[header.index('make')] = temp[0]
        try:
            row[header.index('model')] = temp[1]
        except:
            row[header.index('make')] = "Datsun"
            row[header.index('model')] = temp[0]
        print(row[header.index('make')],row[header.index('model')])

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

write_csv('cars_engage_2022',header,data)