available_water = 40
daily_req = 50
if available_water >= daily_req:
    print("You have enough water for the day!")
else:
    print("You don't have enough water for the day. You need", daily_req - ava_water, "more litres")