# Generated by Django 2.2.20 on 2021-04-27 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0020_post_card_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='projects-photos/%Y/%m/%d')),
                ('project_description', models.CharField(max_length=200)),
                ('code_link', models.CharField(max_length=300)),
                ('demo_link', models.CharField(max_length=300)),
            ],
        ),
        migrations.AlterField(
            model_name='post',
            name='cover_image',
            field=models.ImageField(blank=True, null=True, upload_to='post-photos/%Y/%m/%d'),
        ),
    ]