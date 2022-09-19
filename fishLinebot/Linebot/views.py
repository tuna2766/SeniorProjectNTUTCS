from django.shortcuts import render

# Create your views here.
import string
import random
from Linebot.image_processing import *
from django.conf import settings
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseForbidden
from django.views.decorators.csrf import csrf_exempt

from linebot import LineBotApi, WebhookParser
from linebot.exceptions import InvalidSignatureError, LineBotApiError
from linebot.models import MessageEvent, TextSendMessage, ImageSendMessage

line_bot_api = LineBotApi(settings.LINE_CHANNEL_ACCESS_TOKEN)
parser = WebhookParser(settings.LINE_CHANNEL_SECRET)


@csrf_exempt
def fishapi(request):
    if request.method == 'POST':
        signature = request.META['HTTP_X_LINE_SIGNATURE']
        body = request.body.decode('utf-8')

        try:
            events = parser.parse(body, signature)
        except InvalidSignatureError:
            return HttpResponseForbidden()
        except LineBotApiError:
            return HttpResponseBadRequest()

        for event in events:
            if isinstance(event, MessageEvent):
                if event.message.type=='image':
                    image_name = ''.join(random.choice(string.ascii_letters + string.digits) for x in range(4))
                    image_content = line_bot_api.get_message_content(event.message.id)
                    image_name = image_name.upper()+'.jpg'
                    path='./static/'+image_name
                    with open(path, 'wb') as fd:
                        for chunk in image_content.iter_content():
                            fd.write(chunk)

                    info, img = image_processing(path)
                    domain = '9ce9-220-136-100-83.jp.ngrok.io'
                    img = 'https://'+domain+"/static/" + img
                    message=[]
                    message.append(ImageSendMessage(original_content_url=img,preview_image_url=img))
                    message.append(TextSendMessage(text=info))
                    line_bot_api.reply_message(event.reply_token,message)
                else:
                    mtext=event.message.text
                    message=[]
                    message.append(TextSendMessage(text=mtext))
                    line_bot_api.reply_message(event.reply_token,message)

        return HttpResponse()
    else:
        return HttpResponseBadRequest()
