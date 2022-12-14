FROM python:3
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE=1
WORKDIR /back
COPY requirements.txt /.
COPY ./ ./
RUN pip install -r requirements.txt
WORKDIR /back/back
EXPOSE 8000
CMD python3 manage.py runserver 0.0.0.0:8000  

