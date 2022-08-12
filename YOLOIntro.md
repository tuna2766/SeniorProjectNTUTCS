# YOLO V4

# YOLO V4

### darknet

- *Darknet is an opensource neural network framework and YoloV4 uses the Darknet framework.*

### fish

/annotations

/images

genertxt.py

voc2yolo.txt

- *Fish is the training set that be used in our fish detection model, including annotations and images.*
- *annotations is a folder for storing VOC files. VOC is a PASCAL Visual Object Classes project that aims to standardize the datasets and annotations format, this annotations can be used for image classification and object detection tasks.*
- *voc2yolo.py converts PASCAL VOC XML and images folder to YOLO format, the results are stored in a folder of yolo_data.*
- *genertxt.py classifies the training dataset into training data and validation data, the ratio of training data and validation data is 8 : 2.*

### fish_detection

/cfg

/weights

fish.data

fish.name

train.txt

val.txt

yolov4-tiny-obj

yolov4-tiny.conv.29

- *train.txt and val.txt respectively record the paths of training data and validation*
- *fish.data records the number of classes, the location of train.txt, the location of val.txt, the location of the mask.names file, and the path of the weights output (backup).*
- *fish.name records the name of each category, the first line corresponds to classId = 0, and so on.*

### opencv

- *OpenCV_VERSION 4.5.4*

### testimg

### yolo_data