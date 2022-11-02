from django import forms

class BlogForm(forms.Form):
  title = forms.CharField(label='Название')
  description = forms.CharField(label='Описание')
  topic = forms.CharField(max_length=10, label='Тема')