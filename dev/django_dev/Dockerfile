FROM python:3.12-slim AS base

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# RUN pip install --no-cache-dir -r /app/backend/requirements.txt
RUN pip install --upgrade pip
RUN apt-get update && apt-get upgrade -y && apt-get install -y build-essential

WORKDIR /app/backend/
# RUN pip install -r ./requirements.txt

# RUN SERVER
# WORKDIR /app/backend/pathshare
# RUN sed -i 's/\r$//g' ./start.sh
# RUN chmod +x ./start.sh

# RUN "python3 manage.py makemigrations"
# RUN "python3 manage.py migrate"
CMD [ "./pathshare/run/dev/start.sh" ]