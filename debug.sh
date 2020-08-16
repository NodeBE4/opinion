#!/bin/bash
if [ -d "./_posts_sample" ]; then
  mv _posts _posts_all;
  mv _posts_sample _posts;
else
  mv _posts _posts_sample;
  mv _posts_all _posts;
fi
