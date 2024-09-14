# 📘 OOP Kavramları (Object-Oriented Programming)
Bu dosya, OOP (Nesne Yönelimli Programlama) kavramlarına kısa ve anlaşılır bir genel bakış sunmaktadır.

## 🧩 1. Abstraction (Soyutlama)
Abstraction, bir nesnenin sadece gerekli özelliklerinin ve davranışlarının gösterilmesi, gereksiz detayların gizlenmesidir.
Örnek: Bir telefon düşünün; telefonun işlevlerini kullanabilirsiniz, fakat içindeki çipin nasıl çalıştığını bilmek zorunda değilsiniz. Bu, soyutlamaya güzel bir örnektir.

## 🛡️ 2. Encapsulation (Kapsülleme)
Encapsulation, bir nesnenin verilerini ve bu verilere erişim yöntemlerini bir arada tutar. Bu, veri güvenliği sağlar ve nesne dışından doğrudan veri erişimini engeller.
Veri, sadece belirlenen yöntemlerle manipüle edilebilir.

## 🧬 3. Inheritance (Kalıtım)
Inheritance, bir sınıfın başka bir sınıftan özellikleri ve davranışları miras almasını sağlar.
Faydası: Kodun tekrar yazılmasını engeller ve kodun yeniden kullanılabilirliğini artırır.

## 🔄 4. Polymorphism (Çok Biçimlilik)
Polymorphism, aynı metodun farklı sınıflarda farklı şekillerde uygulanabilmesini ifade eder.
Bu sayede, nesneler farklı türlerden olsalar bile aynı metodun çağrılabilmesi sağlanır.

## 🔧 Prototypal Inheritance
### 🛠️ Constructor ve Prototype:
- Constructor fonksiyonunun bir prototype özelliği vardır ve bu prototype içinde calcAge() yöntemi tanımlanmıştır.
- Person.prototype, aslında constructor olan Person'a bir referansa sahiptir. Ancak, bu prototype Person'a ait değil, Person fonksiyonu ile oluşturulan tüm nesnelere aittir.
### 📝 new Anahtar Kelimesi ile Oluşturulan İşlemler:
1. İlk etapta boş bir {} oluşturulur.
2. Constructor bu {}'a ayarlanır ve this kullanılarak işlem yapılır.
3. Yeni {}, constructor fonksiyonunun .__proto__ özelliğine bağlanır.
🔍 Örnek Kod:
```
function Person(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function() {
    console.log(2023 - this.birthYear);
};

const selim = new Person("Selim", 1990);
selim.calcAge(); // Prototypal inheritance ile miras alınan yöntem çağrılır.
```
⭐ Bu yapı sayesinde istediğimiz kadar nesne oluşturup, calcAge gibi fonksiyonları miras alabiliriz. Bu durum performans sağlar.
## 🔑 Sonuç
Bu README dosyasındaki kavramlar, OOP'yi daha iyi anlamanızı sağlamak için basit bir dille anlatılmıştır.
Kod örnekleri ve açıklamalar daha derinlemesine incelemeler için başlangıç noktasıdır.

