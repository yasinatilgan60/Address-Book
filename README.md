# Address-Book
AngularJS, Bootstrap, Bootswatch ve JSON - Server Rest API kullanarak geliştirdiğim projedir.

# Proje Açıklaması
![address](https://user-images.githubusercontent.com/22527168/70274964-3b0aa580-17be-11ea-9094-72b48085cd2b.PNG)

Tek bir sayfadan oluşan projede adres defterine kayıt ekleme ve kullanıcıya ait herhangi bir bilgi ile arama yapılabilmektedir. Ekleme butonu ilk olarak pasif durumdadır. Veri girişleri validasyonu yapıldıktan sonra ekleme butonu aktif hale gelmektedir.

# Projenin Çalıştırılması

Projenin **node_modules** klasörü repository içerisinde yoktur. **Proje klasörü dizininde** aşağıdaki komut çalıştırılarak bu klasör projeye dahil edilmelidir.

```
 npm install
```

Proje Rest API olarak JSON - Server Fake Rest API kullanmaktadır. Global olark eklenmesi için aşağıdaki komut çalıştırılmalıdır.

```
 npm install -g json-server
```

Rest API'nin izlenebilmesi için aşağıdaki komutlar çalıştırılmalıdır.

```
 cd Db-Address-Book
 json-server --watch db.json
```
AngularJS projesinin çalıştırılması için aşağıdaki komutlar çalıştırılmalıdır.

```
 cd Address-Book
 ng serve --open
```
