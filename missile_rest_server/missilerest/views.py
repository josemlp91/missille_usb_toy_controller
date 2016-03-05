from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
from django.http import JsonResponse
from settings import DRIVER_SOFTWARE

import os

def connect(request):
    result={'operation':'connect', 'status':'ok'}
    print DRIVER_SOFTWARE
    return JsonResponse(result)

def up(request):
    os.popen("sudo " + DRIVER_SOFTWARE  + " -U  ", 'w')
    result={'operation':'up', 'status':'ok'}
    return JsonResponse(result)


def down(request):
    os.popen("sudo " + DRIVER_SOFTWARE  + " -D  ", 'w')
    result={'operation':'down', 'status':'ok'}
    return JsonResponse(result)


def right(request):
    os.popen("sudo " + DRIVER_SOFTWARE  + " -R  ", 'w')
    result={'operation':'right', 'status':'ok'}
    return JsonResponse(result)


def left(request):
    os.popen("sudo " + DRIVER_SOFTWARE  + " -L  ", 'w')
    result={'operation':'left', 'status':'ok'}
    return JsonResponse(result)

def fire(request):
    os.popen("sudo " + DRIVER_SOFTWARE  + " -F  ", 'w')
    result={'operation':'fire', 'status':'ok'}
    return JsonResponse(result)
