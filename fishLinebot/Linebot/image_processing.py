import subprocess
import random
import string
def image_processing(image_path):
    #讀取照片原圖
    p = subprocess.Popen("/home/nvidia/Desktop/workspace/darknet/darknet detector test /home/nvidia/Desktop/workspace/YoloTrain/fish_detection/cfg/fish.data /home/nvidia/Desktop/workspace/YoloTrain/fish_detection/cfg/yolov4-tiny-obj.cfg /home/nvidia/Desktop/workspace/YoloTrain/fish_detection/cfg/weights/yolov4-tiny-obj_last.weights " + image_path + " -dont_show", shell=True, stdout=subprocess.PIPE) 
    p.wait()
    r = p.stdout.read().decode("utf-8")
    idx = r.find('Predicted')
    r = r[idx:len(r) - 1]
    image_name = ''.join(random.choice(string.ascii_letters + string.digits) for x in range(4))
    image_name = image_name.upper()+'.jpg'

    p = subprocess.call("mv /home/nvidia/Desktop/workspace/fishLinebot/predictions.jpg /home/nvidia/Desktop/workspace/fishLinebot/static/" + image_name, shell=True)
 
    return r, image_name
