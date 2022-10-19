import requests
def webapi(user, fish_name, img_url, number):
  
    url = 'https://b213-2001-b011-8-1f7a-a916-39af-9c8-875e.jp.ngrok.io/record'

    myobj = {'email':user,
             'photo':img_url,
             'fingerlings':fish_name, 
             'yield_of_catch':number
        }

    x = requests.post(url, json= myobj)
    print(x.text) 
