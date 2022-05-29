import json
value = input()
value = json.loads(value)
value['seats'] = float(value['seats'])/14
value['EngineCC'] = float(value['EngineCC'])/3498
value['how_old'] = float(value['how_old'])/23
value['mileage_conv'] = float(value['mileage_conv'])/33.44
value['torque_conv'] = float(value['torque_conv'])/789
value['km_driven'] = float(value['km_driven'])/2360457
value['max_power_conv'] = float(value['max_power_conv'])/272

def fix(d):
    f = d['owner']
    for i in ["First Owner", "Fourth & Above Owner", "Second Owner", "Test Drive Car", "Third Owner"]:
        d[i] = 0
    d[f] = 1
    f = d['dealer']
    for i in ["Dealer", "Individual", "Trustmark Dealer"]:
        d[i] = 0
    d[f] = 1
    f = d['fuel']
    for i in ["CNG", "Diesel", "LPG", "Petrol"]:
        d[i] = 0
    d[f] = 1
    f = d['transmission']
    for i in ["Automatic", "Manual"]:
        d[i] = 0
    d[f] = 1
    del d['owner']
    del d['dealer']
    del d['fuel']
    del d['transmission']
    return d


value = fix(value)
import json
import joblib
import pandas as pd
import numpy
model = joblib.load('scripts/autotrain-Engage-898129300/model.joblib')
config = json.load(open('scripts/autotrain-Engage-898129300/config.json'))

features = config['features']
df = pd.DataFrame.from_dict([value])
data = df
data.columns = ["feat_" + str(col) for col in data.columns]
# data  = data.reshape(-1,1)
predictions = model.predict(data)  # or model.predict_proba(data)
print(predictions[0])
