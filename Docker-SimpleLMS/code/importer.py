import os
import sys
sys.path.append(os.path.abspath(os.path.join(__file__, *[os.pardir] * 3)))
os.environ['DJANGO_SETTINGS_MODULE'] = 'simple_lms.settings'
import django
django.setup()

import csv
import json
from random import randint
from django.contrib.auth.models import User
from core.models import Course, CourseMember, CourseContent, Comment

import time
start_time = time.time()

filepath = './dummy_data/'

with open(filepath+'user-data.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for num, row in enumerate(reader):
            if not User.objects.filter(username=row['username']).exists():
                User.objects.create_user(
					 id=num+1, username=row['username'], 
					 password=row['password'], 
					 email=row['email'])
    
with open(filepath+'course-data.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for num,row in enumerate(reader):           
        if not Course.objects.filter(pk=num+1).exists():                        
            Course.objects.create(
					id=num+1, name=row['name'], 
					description=row['description'], 
					price=row['price'],
					teacher=User.objects.get(pk=int(row['teacher'])))
            
with open(filepath+'member-data.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for num, row in enumerate(reader):
        if not CourseMember.objects.filter(pk=num+1).exists():
            CourseMember.objects.create(
		            course_id=Course.objects.get(pk=int(row['course_id'])),
					user_id=User.objects.get(pk=int(row['user_id'])),
					id=num+1, roles=row['roles'])
            
with open(filepath+'contents.json') as jsonfile:
    comments = json.load(jsonfile)
    for num, row in enumerate(comments):
        if not CourseContent.objects.filter(pk=num+1).exists():
            CourseContent.objects.create(
		            course_id=Course.objects.get(pk=int(row['course_id'])),
					video_url=row['video_url'], name=row['name'],
					description=row['description'], id=num+1)
            
with open(filepath+'comments.json') as jsonfile:
    comments = json.load(jsonfile)
    for num, row in enumerate(comments):
        if int(row['user_id']) > 50:
            row['user_id'] = randint(5, 40)
        if not Comment.objects.filter(pk=num+1).exists():
            Comment.objects.create(
		            content_id=CourseContent.objects.get(pk=int(row['content_id'])),
					user_id=User.objects.get(pk=int(row['user_id'])), id=num+1,
					comment=row['comment'])

print("--- %s seconds ---" % (time.time() - start_time))