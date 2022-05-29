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

import joblib
import pandas as pd


# model = joblib.load('model.joblib')
# config = json.load(open('config.json'))

# features = config['features']

print(f"Python script response: {value}")