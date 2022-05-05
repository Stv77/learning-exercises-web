<blockquote>
<p><small>Catatan ini merupakan timestamps dan rangkuman materi dari YouTube channel <a href="https://www.youtube.com/channel/UC14ZKB9XsDZbnHVmr4AmUpQ">Programmer Zaman Now/PZN</a>.</p>

<p>Terdapat materi-materi yang berbayar dan catatan saya tidak akan mencakup hal itu. Catatan ini hanya mencakup materi JavaScript dasar dan JavaScript OOP.</p>
<p>Catatan ini sengaja saya taruh di Github karena menurut saya ini penting dan agar mudah saya akses.</p>
</small>
</blockquote>

## <a href="https://www.youtube.com/watch?v=SDROba_M42g&list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&index=1&t=98s">JavaScript Dasar</a> (<a href="https://docs.google.com/presentation/d/1dTIkYD_keBljJS78WxU-3ZneJDLdWt5nReO2CUXfFKg/edit">slide</a>)

- <a href="https://dev.to/fatematzuhora/different-use-cases-of-console-log-you-should-use-when-debugging-javascript-30pf">Different types of console</a>

- 4:45:43 => <code>with</code> statement
  <details>
  
  ```
  const person = {
    firstName: "Eko",
    middleName: "Kurniawan",
    lastName: "Khannedy"
  }
  with (person) {
    console.log(firsName);
    console.log(middleName);
    console.log(lastName);
  }
  ```

  </details>

  <p>Meskipun ada with statement, tapi itu tidak direkomendasikan karena membuat sebuah kode menjadi ambigu karena mungkin masih ada variable lain yang menggunakan nama yang sama.</p>
    <details>

    ```
    const person = {
      firstName: "Eko",
      middleName: "Kurniawan",
      lastName: "Khannedy"
    }
    const firstName = "Budi";
    const lastName = "Nugraha";
    with (person) {
      console.log(firsName);
      console.log(middleName);
      console.log(lastName);
    }
    ```

    </details>

- 5:21:39 => default parameter
  <details>
  
  ```
  function register(name, gender ="UNKNOWN") {
    console.log(name);
    console.Log(gender);
  }
  register("Eko", "MALE");
  register("Budi");
  register("Joko", undefined);
  ```

  </details>

- 5:24:30 => perbedaan <code>null</code> dengan <code>undefined</code>, kalau null adalah value yang kosong tapi undefined artinya sama sekali valuenya belum diatur/disetel.

<h3>Rest Parameter</h3>

- 5:25:45 => Rest parameter adalah fitur di mana kita dapat mengirim data sebanyak-banyaknya pada suatu parameter dan secara otomatis akan diubah menjadi Array. Namun, ada syarat bagi rest parameter ini.
  - hanya boleh satu di function.
  - hanya boleh berada di posisi paling akhir, kecuali memang hanya 1 parameter.
    <details>

    ```
    function sum (name, ...data){
      let total=0
      for (const item of data){
          total += item;
      console.info(CTotal ${name} is ${total}`);
    }
    sum('Orance', 2, 3, 4, 6, 7, 8);
    sum('Apple', 5, 5, 6, 7, 5, 6);
    sum('Banana', 9, 5, 2, 3, 4);
    ```

    </details>

- 5:32:44 => spread syntax
  <details>

  ```
  function sum(name, ...data){
    let total=0
    for (const item of data){
        total += item;
    console.info(CTotal ${name} is ${total}`);
  }
  sum('Orance', ...[2, 3, 4, 6, 7, 8]);
  sum('Apple', ...[5, 5, 6, 7, 5, 6]);
  sum('Banana', ...[9, 5, 2, 3, 4]);
  ```

  </details>

- 5:35:05 => Arguments object - sama seperti rest parameter, tapi kelemahannya kita tidak menentukan variablenya. Perlu diingat, bahwa saat ini lebih baik menggunakan rest parameter.
  <details>

  ```
  function oldSum(){
    let total=0
    for (const item of arguments){
        total += item;
    }
    console.info(CTotal is ${total}`);
  }
  oldSum (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  ```

  </details>

- 5:39:07 => function bisa dijadikan variable dalam JavaScript/sangat fleksibel.
  <details>

  ```
  function sayHello(name){
    console.info(`Hello ${name}`);
  }
  let say = sayHello;
  sayHello("Eko");
  say("Budi");
  ```

  </details>

- 5:42:15 => function juga bisa dijadikan sebagai parameter di function yang lainnya.
  <details>

  ```
  function sayHello(name) {
    document.writeln(`<p>Hello ${name}</p>`);
  }
  
  let say = sayHello; 
  function giveMeName(callback){
      callback("Eko");
  }
  giveMeName(sayHello); //
  giveMeName(say);
  ```

  </details>

<h3>Anonymous function</h3>

- 5:45:40 => anonymous function/function tanpa nama
  <details>

  ```
  let say = function (nạme){
     console.info(`Hello ${name}`);
  };
  say("Eko");
  ```

  </details>

- 5:48:38 => anonymous function di dalam parameter
  <details>

  ```
  function giveMeName (callback){
    callback("Eko");
  }
  giveMeName (function (name){
      console.info(`Hello ${name}`);
  }, parameterSelanjutnya...); //kalau ada
  ```

  </details>

- 5:52:28 => function yang ada di dalam function lagi, tidak bisa diakses di luar function itu.
  <details>

  ```
  function outer(){
    function inner(){
         console.info("Inner");
    }

    inner()
    inner ();

  }

  outer();
  inner() // ERROR can not access inner function
  ```

  </details>

- 5:56:16 => scope (global & local)
  <details>

  ```
  // global scope (bisa diakses di mana pun)
  let counter=0;

  function hitMe(){
    // local scope function hitMe (hanya bisa diakses di dalam function)
    counter++; // we can access
  }
  hitMe();
  hitMe();
  console.info(counter);
  ```

  </details>

- 6:11:06 => recursive
  <details>

  ```
  function factorialRecursive(value){
    if (value === 1){
        return 1;
    } else{
        return value*factorialRecursive(value-1);
  }

  factorialRecursive (5);
  //5*factorialRecursive (4)
  //5*4*factorialRecursive(3)
  //5*4*3*factorialRecursive (2)
  //5*4*3*2*factorialRecursive(1)
  //5*4*3*2*1
  ```

  </details>

<h3>Function generator</h3>

- 6:17:00 => function generator berfungsi untuk mengenerasikan data yang dapat diiterasikan seperti array dengan membubuhkan tanda * setelah kata function dan pengembalian datanya menggunakan kata yield. Namun, data pada tipe fungsi generator itu tidak dapat diperlakukan seperti array dengan memanggil indeksnya, meskipun dia dapat diiterasikan. (sederhana)
  <details>

  ```
  function* createNames(){
   yield "Eko";
   yield "Kurniawan";
   yield "Khannedy";
  }
  const names = createNames();
  for (const name of names){
    console.log(name);
  }

  console.info(names[0]) //undefined
  ```

  </details>

- 6:20:36 => data generator (kompleks)
  <details>

  ```
  function* buatGanjil(value){
    for (leti=1;i<= value; i++){
        if (i%2=== 1){
            yield i;
        }
    }
  }
  const angkaGanjil=buatGanjil(100);
  for (const angka of angkaGanjil) {
      console.info(angka);
  }
  ```

  </details>

- 6:23:06, 6:24:23 - dst, 6:25:41 => lazy evaluation (data generator) vs eager evaluation (ordinary function)
  <details>

  ```
  // lazy -> hanya akan diiterasikan ketika dieksekusikan
  function* buatGanjil(value){
    for (Leti=1;i<= value; i++){
      if (i%2=== 1){
        console.info(Yield ${i}`);
        yield i;
      }
    }
  }

  // eager -> akan mengenerate Yield 1-100 kemudian baru /diiterasi
  function buatGaniilArray (value){
    const result=[] 
    for (leti=1;i<= value; i++){
      if (i%2=== 1){
        console.info(Yield ${i}`);
        result.push (i);
      }
    }
    return result;
  }

  console.info(numbers.next().value); //Yield 1 -> hanya dieksekusi 1x

  ```

  ```
  function* buatGanjil(value){
    for (Leti=1;i<= value; i++){
      if (i%2=== 1){
            console.info(`Perulangan ke ${i}`);
            yield i;
      }
    }
  }
  const angkaGanjil = buatGanjil(100);
  console.info(angkaGanjil.next().value);
  console.info(angkaGanjil.next().value);
  console.info(angkaGanjil.next().value);

  ```

  </details>

  - 6:26:29 - 6:27:02 => perbandingan eager vs lazy

- 6:29:58 => arrow function
  - Berikut contoh beberapa kekurangan arrow function:
     - tidak memiliki fitur arguments object
     - tidak bisa menggunakan function generator
     - tidak bisa mengakses this (yang nanti akan dibahas di function di object)
     - tidak bisa mengakses super (yang nanti akan dibahas di JavaScript Object Oriented Programming)
     <details>

     ```
     const sayHello (name) =>{
        const say=`Hello ${name}`;
        console.info(say);
     }
     sayHello("Eko");
     ```

  - 6:34:16 => Atau menggunakan arrow function tanpa blok <code>{}</code>, contohnya: <code>const sayHelllo (name) => console.info(`Hello ${name}`);</code>, <code>sayHello("Eko")</code>.
  - 6:37:52 => jika parameter hanya 1 (name) <code>const sayHello = name => console.info('Hello ${name}');</code>
  - 6:39:11 => arrow function sebagai parameter
    <details>

    ```
    function giveMeName(callback){
      callback("Eko");
    }
    giveMeName((name) => console.info(`Hello ${name}`));
    ```

    </details>

- 6:41:40 => closure adalah kombinasi fungsi dan bundel referensi ke data disekitarnya, sehinnga dengan closure kita dapat melemparkan data lokal dan referensi datanya ke luar dari lingkupan lokalnya.
  <details>

  ```
  function createAdder(value){
   const owner="Eko";
   function add(param){
        console.info(owner);
        return value+param;
   }
   return add;
  }
  const addTwo = createAdder(2);
  console.info(addTwo (10)); //Eko //12
  console.info(addTwo (20)); //Eko //22
  ```

  </details>

- 6:48:35 => Object method/fungsi di dalam properti objek
  <details>

  ```
  const person = {
    name: "Eko",
    sayHello; function (name){
        alert(`Hello ${name}`);
    }
  };
  person.sayHello("Budi");
  ```

  ```
  const person{
    name: "Eko"
  };
  person.sayHello=function (name){
      alert(`Hello ${name});
  }
  ```

  </details>

<h3>This dalam JavaScript</h3>

- 6:52:38 => kata kunci <code>this</code>
  - Kata kunci this adalah referensi ke object milik siapa
  - Tiap lokasi kata kunci this, bisa berbeda-beda referensi pemilik nya
  - Dalam Object Method, this merupakan referensi ke object pemilik function nya
  - Di global scope, this merupakan referensi ke global object (di browser biasanya Window)
  - Dalam function, this merupakan referensi ke global object (di browser biasanya Window)
  - Di function dengan strict mode (akan dibahas nanti), this adalah undefined
  - Dalam event, this merupakan referensi ke element yang menerima event (dibahas di materi Document Object Model)

    <details>

    ```
    //scope global
    console.info(this); //Window in browser
    ```

    ```
    //scope lokal
    const person={
      name: "Eko",
      sayHello: function (value){
          // this=person
          console.info(`Hi ${name}, my name is ${this.name}'); 
          //tanpa this akan mengakses value
      }
    }
    person.sayHello("Budi");
    ```
- 7:02:41 => arrow function tidak dapat menggunakan this
  <details>

  ```
  const person 
    name: "Eko",
    sayHello: (value) =>{I
         console.info(`Hello ${value}`); //tidak dapat mengakses this.name
    }
  };
  person.sayHello("Budi");
  ```
  </details>

<h3>Getter & Setter</h3>

- 7:05:36 => getter menjadikan fungsi pada sebuah objek <code>{}</code> dapat diakses selayaknya sebuah properti.
  <details>

  ```
  const person={
    firstName: "Eko",
    lastName: "Kurniawan", 11
    get fullName(){
        return ${this.firstName} ${this.lastName}`;
    }
  }
  // otomatis memanggil get fullName()
  console.info(person.fullName);
  ```

  </details>

- 7:09:52 => setter
  <details>

  ```
  const person={
    firstName: "Eko",
    lastName: "Kurniawan", 11
    get fullName(){
        return ${this.firstName} ${this.lastName}`;
    },
    set fullName(val){
      const array = val.split(" ");
      this.firstName = array[0]; 
      this.lastName = array[1]; 
    }
  }
  person.fullName = "Budi Nugraha";
  console.table(person);

  person.fullName = "Joko Morro";
  console.table(person);

  person.fullName = "Eko Khannedy";
  console.table(person);

  ```

  </details>

<h3>Let vs Var</h3>

- 7:15:43 => var tidak direkomendasikan karena tidak memiliki scope dan dapat membingungkan
  <details>

  ```
  // Global scope
  let i = 20; //jika diganti menggunakan var, maka i menjadi 10
  for (let i = 0; i < 10; i++){
    // Local scope
    console.info(Local ${i}`);
  }
  console.info(Global ${i}`);
  ```

  </details>

<h3>Destructuring</h3>

- 7:19:19 => destructuring merupakan fitur untuk membongkar value pada array/objek ke dalam variable-variable baru, sehingga pengambilan data pada array/objek dapat dilakukan tanpa pengambilan data satu per satu.
  <details>

  <h3>Array</h3>
        
  ```
  const names=["Eko", "Kurniawan", "Khannedy", "Budi", "Joko"];
  const [firstName, middleName, lastName, ...otherş]=names;
  console.info(others);
  console.info(firstName);
  ```

  <h3>Objek</h3>

  ```
  const person={
    firstName: "Eko",
    lastName: "Khannedy"
    address:{
        street: "Jalan Belum Ada"
        city: "Jakarta",
        country: "Indonesia"
    },
    hobby: "Game"
    channel: "Programmer Zaman Now"
  };

  const {firstName, lastName, address, ...others} = person;
  console.info(firstName);
  console.info(lastName);
  console.info(address);
  console.info(others);
  ```

  <h3>Destructuring nested object</h3>

  ```
  const person={
    firstName: "Eko",
    lastName: "Khannedy"
    address:{
        street: "Jalan Belum Ada"
        city: "Jakarta",
        country: "Indonesia"
    },
    hobby: "Game"
    channel: "Programmer Zaman Now"
  };

  const {firstName, lastName, address: {country, city, street}, ...others} = person;
  //address tidak bisa lagi diakses karena sudah di destructured

  console.infofirstName);
  console.info(lastName);
  console.info(country);
  console.info(city);
  console.info(street);
  console.info(others);
  ```

  </details>

- 7:30:12 => destructuring in function parameter
  <details>

  <h3>Objek</h3>

  ```
  function displayPerson({firstŅame, middleName, lastName}){
     console.info(firstName);
     console.info(middleName);
    console.info(lastName);
  }
  const person={
      firstName: "Eko",
      middleName: "Kurniawan",
      LastName: "Khannedy"
  };
  displayPerson(person);
  ```

  <h3>Array</h3>

  ```
  function sum([first, seçond]){
    return first+second;
  }
  console.info(sum([10, 10]))
  console.info(sum([20, 10]))
  ```

  </details>

- 7:33:58 => Default value in destructuring array
  <details>

  ```
  const names=["Eko", "Kurniawan"];
  const [firstName, middleName, lastName = "Khannedy"] = names;
              
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
  ```

  </details>

- 7:37:43 => menggunakan nama variable lain dalam destructuring
  <details>

  ```

  const person={
    firstName: "Eko",
    middleName: "Budi",
    lastName: "Khannedy"  
  };

  const{
    firstName: namaDepan,
    middleName: namaTengah="Kurniawan"
    lastName: namaBelakang} = person;
  
  console.info(namaDepan);
  console.info (namaTengah);
  console.info(namaBelakang);
  ```

  </details>

<h3>Strict mode</h3>

- 7:39:53 => secara default kode program yang kita buat pada JavaScript adalah sloopy mode, bukan strict mode. Dalam ECMAScript5, diperkenalkan mode strict, di mana ketika dijalankan akan mengubah beberapa cara kerja JavaScript yaitu:
  - Merubah beberapa JavaScript error dari yang tadinya silent error, menjadi throw error (terlihat)
  - Memperbaiki beberapa kesalahan engine JavaScript untuk optimisasi
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode">Menolak beberapa kode perintah yang kedepannya akan digunakan di ECMAScript</a>.
- 7:42:32, 7:43:24 => cara menggunakan strict mode yaitu dengan menambahkan string 'use strict' di awal baris JavaScript atau di awal fungsi.
  <details>

  ```
  function useStrictMode(){
    'use strict';
    const person={
        firstName: "Eko"
    }
    with (person){
        console.info(firstName);
    }
  }
  
  useStrictMode();
  ```

  </details>

<h3>Debugger</h3>

- 7:47:20, 7:50:43 => debugger merupakan fitur untuk memecahkan masalah dengan menghentikan kode program pada titik tertentu/breakpoint lalu melihat seluruh variable yang ada pada saat kode itu terhenti. Tambahkan kata kunci <code>debugger</code> agar kode program dapat didebug.
  <details>

  <h3>Contoh kode yang mau didebug</h3>

  ```
  function createFullName(firstName, middleName, lastName){
    debugger; //tambahkan kata kunci debugger agar bisa didebug
    const fulLName=${firstName} ${LastName} ${LastName}`
    return fullName;
  }
  const name = createFullName("EKo", "Kurniawan", "Khannedy");
  console.info(name);
  ```

  </details>

  - 7:51:39 => ketika debug kita dapat melihat scope dari program kita, breakpoint, DOM breakpoint, dan global listeners.
    - 7:52:46, 7:53:04 => ketika kita klik bagian program kita, maka kita bisa menambahkan breakpoint/beberapa stop. Setelah kita resume, programnya akan berjalan dan berhenti pada breakpoint yang kita buat.

## <a href="https://www.youtube.com/watch?v=aviAyIK5oSU&list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&index=2">JavaScript OOP</a> (<a href="https://docs.google.com/presentation/d/1kZJB3w5Zgnr4bUCjHMs9LdBGurnT8PR57f7U9h9vGzg/edit">slide</a>)

- 4:40 => class adalah blueprint/cetakan dari sebuah objek dan class dapat memuat objek tanpa batas.
  <details>

  <img src="https://i.postimg.cc/tCzgg01d/class-js.png"></img>

  <p>Objek dalam class di atas adalah eko, joko, budi yang terbentuk dari class parent yang di atasnya.</p>

  </details>

<h3>Constuctor function</h3>

- 9:27 => JavaScript pada awalnya dibuat sebagai bahasa yang prosedural, bukan OOP dan memang implementasi OOP dalam Js tidak sedetail bahasa pemrograman lain seperti Java atau C++.
- 14:38 => constructor function - <code>function Person()...</code>, huruf awal pada constructornya huruf kapital.
  - 16:45 => kita dapat menambahkan kata <code>new</code> diikuti dengan nama constructor functionnya.
    <details>

    ```
    function Person() {
      
    }

    const eko = new Person();
    ```

    </details>

- 19:20 => property di constructor function
  <details>

  ```
  function Person() {
    this.firstName = "";
    this.lastName = "";
  }

  const eko = new Person();
  eko.lastName = "Khannedy";
  ```

  </details>

- 24:25 => method di constructor function
  <details>

  ```
  function Person(){
      this.firstName = "";
      this.lastName = "";
      this.sayHello = function (name){
          console.info(`Hello ${name}, my name is ${this.firstName}`)
    }
  }

  const eko = new Person();
  eko.firstName = "Eko";
  eko.sayHello("Joko");
  ```

  </details>

- 28:44 => parameter di constructor function
  <details>

  ```
  function Person(firstName, lastName)
      this.firstName=firstName;
      this.lastName=lastName;
      this.sayHello=function (name){
          console.infoCHello ${name}, my name is ${this.firstName}`)
      }
  }
  const eko = new Person("Eko", "Kurniawan");
  eko.sayHello("Joko");
  ```

  </details>

- 31:49 => constuctor inheritance digunakan untuk mewariskan semua property yang dibuat dari parentnya dengan menggunakan metode <code>.call(this, parameter)</code>

  <details>

  ```
  function Employee(firstName){
      this.firstName=firstName;
      this.sayHello function (name){
          console.info('Hi ${name}, my name is ${this.firstName}`)
      }
  }
  function Manager(firstName, lastName){
      Employee.call(this, firstName)
      this.lastName=lastName;
  }
  const eko = new Manager("Eko", "Khannedy");
  console.info(eko);
  ```

  </details>

<h3>Prototype</h3>

- 38:08 => prototype secara otomatis dibuat ketika function dibuat, misal ketika membuat function Person, maka Person.prototype juga akan dibuat.
- 40:05 => diagram prototype
- 43:05, 43:24 => ketika kita menambah properti ke instance object, hanya instance objek itu yang berubah, objek yang tidak diubah akan tetap sama.
  <details>

  ```
  function Person (firstName, lastName){
    this.firstName=firstName;
    this.LastName=lastName;
    this.sayHello=function (name){
         console.info CHello ${name}, my name is ${this.firstName})
    }
  }
  
  const eko=new Person("Eko", "Khannedy");

  // ini hanya untuk instance object eko
  eko.sayBye=function (){
      console.info("Good Bye")
  }
  ```

  </details>

- 44:25 => menambahkan property ke prototype
  <details>

  ```
  function Person (firstName, lastName){
    this.firstName=firstName;
    this.LastName=lastName;
    this.sayHello=function (name){
        console.info CHello ${name}, my name is ${this.firstName})
    }
  }
  Person.prototype.sayBye=function (){
    console.info("Good Bye");
  }
  Person.prototype.run=function (){
      console.info ('${this.firstName} is running');
  }
  ```

  - 45:50 => pada kode di atas kita tidak menambahkan instance ke dalam objeknya, sehingga di dalam console browser tidak akan muncul, tetapi hanya akan terlihat di dalam <code>__proto__</code> pada console browser.

  </details>

- 46:57 => ketika kita mengakses property di instance object, pertama akan dicek apakah property itu ada di object tersebut, jika tidak ada maka baru akan di cek di __proto__ (prototype), begitu seterusnya sampai berakhir di Object Prototype.
  <details>

  <img src="https://i.postimg.cc/Pr8j5wLm/proto.png"></img>

  <p>Pengecekan instance dari atas ke bawah, jika pada bagian atas instance yang dicari sudah ketemu, maka bagian yang bawahnya tidak akan dilanjutkan untuk dicari lagi.</p>

  </details>

- 52:27, 56:46, 57:48 (bagian bawah menang) => prototype inheritance yang salah
  <details>

  ```
  function Employee(name){
    this.name = name;
  }
  function Manager(name){
    this.name = name;
  }
  
  Manager.prototype = Employee.prototype; //kesalahan ada di sini
  Manager.prototype.sayHello = function (name){
    console.info('Hello ${name}, my name is Manager ${this.name}');
  }
  Employee.prototype.sayHello =function (name){
    console.info('Hello ${name}, my name is Employee ${this.name}');
  }

  const employee = new Employee("Budi");
  employee.sayHello("Joko")
  const manager = new Manager("Eko");
  manager.sayHello("Joko")

  //output:
  //Hello Joko, my name is
  //Employee Budi
  //Hello Joko, my name is
  //Employee Eko
  ```

  <p>Kenapa <code>Manager.prototype = Employee.prototype</code> ini salah? Karena sebetulnya kita overwritting <code>Manager.prototype</code> menjadi <code>Employee.prototype</code>.</p>

  </details>

- 58:16 => lalu bagaimana yang benar? seharusnya prototype dari manager yang mengacu kepada prototype dari employee.
  <details>

  ```
  function Employee(name){
    this.name = name;
  }
  function Manager(name){
    this.name = name;
  }
  
  Manager.prototype = Object.create(Employee.prototype); //yang benar
  Manager.prototype.sayHello = function (name){
    console.info('Hello ${name}, my name is Manager ${this.name}');
  }
  Employee.prototype.sayHello =function (name){
    console.info('Hello ${name}, my name is Employee ${this.name}');
  }

  const employee = new Employee("Budi");
  employee.sayHello("Joko")
  const manager = new Manager("Eko");
  manager.sayHello("Joko")
  ```

  </details>

<h3>Class</h3>

- 1:02:55 => Pembuatan instance objectnya sama dengan constructor function.
- 1:04:48 => Sebenarnya di belakang OOP JS, konsepnya tetap masih prototype.
  <details>

  ```
  class Person {
  }
  const eko = new Person();
  console.info(eko);
  ```
  <p>Hal ini sama dengan kode di bawah</p>

  ```
  Person.prototype.sayHello = function {
  }

  const eko = new Person();
  console.info(eko);
  ```

  </details>

- 1:05:30 => constuctor di class
  <details>

  ```
  class Person{
    constructor(name){
      console.log('Membuat Person ${name}');
  }
  const eko = new Person("Eko"); 
  //parameter "Eko" akan dikirim ke constructor name
  console.info(eko);
  ```

  </details>

- 1:08:30 => property di class
  <details>

  ```
  class Person{
    constructor(name){
        this.name=name;
    }
  }
  const eko=new Person("Eko");
  console.info(eko.name);
  ```
  <img src="https://i.postimg.cc/90Dw1RZY/property-name.png"></img>

  </details>

- 1:11:13 => di class, penambahan method secara otomatis akan masuk ke prototype, sehingga kita bisa menghindari kesalahan mengoverwrite data
  <details>

  ```
  class Person{
    constructor(name){
        this.name = name
    }
    sayHello(name){
        console.info(`Hi ${name}, my name is ${this.name}`);
    }
  }
  ```

  </details>

- 1:16:18 => class inheritance
  <details>

  ```
  class Employee{
      sayHello(name){
          console.info('Hi ${name}, my name is employee ${this.name}');
      }
  }
  class Manager extends Employee{
      sayHello(name){
          console.info('Hi ${name}, my name is manager ${this.name}');
      }
  }
  const budi=new Employee();
  budi.name = "Budi";
  budi.sayHello("Joko");

  const eko = new Manager();
  eko.name = "Eko";
  eko.sayHello("Joko");
  ```

  </details>

- 1:21:36 => constructor inheritance adalah eksekusi constructor lain untuk ditambahkan ke instance objeknya dengan menggunakan <code>super</code>.
  <details>

  ```
  class Employee{
    constructor (name){
      this.name = name;
    }
    
    sayHello(name){
        console.info(`Hello ${name}, my name is employee ${this.name}');
    }
  }

  class Manager extends Employee{
      sayHello(name){
        console.info(`Hello ${name}, my name is manager ${this.name}');
      }
  }

  const budi=new Employee("Budi");
  budi.sayHello("Joko");
  const eko=new Manager ("Eko");
  eko.sayHello ("Joko");
  ```

  </details>

  - 1:24:53 => saat kita buat constructor di child classnya, kita wajib memanggil constructor dari parentnya
    <details>

    ```
    class Employee{
      constructor (firstName){
          this.firstName=firstName;
      }

      sayHello(name){
          console.info(`Hello ${name}, my name is employee ${this.firstName}')
      }
    }

    class Manager extends Employee{
        constructor (firstName, lastName){
            super(firstName);
            this.lastName=lastName;
        }

        sayHello(name){
            console.info(CHello ${name}, my name is manager ${this.firstName} ${this.lastName});
        }
    }

    const budi=new Employee ("Budi")
    budi.sayHello("Joko");
    const eko=new Manager("Eko", "Khannedy");
    eko.sayHello ("Joko");
    ```

    </details>

- 1:28:20, 1:29:16 => kata kunci super juga dapat kita gunakan untuk mengakses method parent classnya dengan menggunakan super titik dan nama functionnya
  <details>

  ```
  class Shape{
      paint(){ //parent class
          console.info("Paint Shape")
      }
  }
  class Circle extends Shape{
      paint(){
          super.paint(); // memanggil paint() method parent class
          console.info("Paint Circle");
      }
  }
  ```

  </details>

- 1:33:21 => Getter & setter di class
  <details>

  ```
  class Person{
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    
    get fullName (){
      return '${this.firstName} ${this.lastName}';
    }
    set fullName (value){
      const result=value.split(" ");
      this.firstName=result[0];
      this.lastName=result[1];
    }
  }
  const eko = new Person("Eko", "Khannedy");
  console.info(eko);

  eko.fullname = "Budi Nugraha";
  console.info(eko);
  ```

  </details>

<h3>Public class field</h3>

- 1:38:48 => <a href="https://github.com/tc39/proposal-class-fields">class field</a> - proposal ini belum final tetapi sudah ada yang memakainya
- 1:38:55 => public & private class field (secara default sebetulnya sifatnya bersifat public)
<details>

  ```
  class Customer{
      firstName;
      lastName;
      balance=0;
  }
  const eko=new Customer();
  console.info(eko);
  ```

  </details>

- 1:43:56 => public class field dan (mengubah data menggunakan) constructor
  <details>

  ```
  class Customer{
    firstName;
    lastName;
    balance=0;

    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
  }
  const eko=new Customer("Eko", "Kurniawan");
  console.info(eko);
  ```

  </details>

<h3>Private class field</h3>

- 1:45:38 => untuk membuat field secara private, kita cukup memberikan tanda '#' untuk menjadikan fieldnya hanya dapat diakses dari dalam class
  <details>

  ```
  class Counter{
      #counter=0 //private

      increment (){
          this.#counter++;
      }
      decrement (){
          this.#counter--;
      }
      get(){
          return this.#counter;
      }
  }

  const counter = new Counter(); 

  //tidak bisa diakses karena mengakses #counter dari luar
  counter.counter = 100 

  //bisa dilakukan karena ada method di dalamnya yang mengakses #counter
  counter.increment(); 
  counter.increment();
  Counter.increment();
  Counter.increment();
  counter.increment();

  console.info(counter.get());
  ```

  </details>

- <a href="https://github.com/tc39/proposal-private-methods">private method</a>
<details>

  ```
  class Person{
    say (name){
      if (name){
          this.#sayWithName(name);
        } else{
          this.#sayWithoutName();
        }
      #sayWithoutName (){
        console.info("Hello");
      }
      #sayWithName (name){
        console.info(Hello ${name}`);
      }
  }

  const eko = new Person();
  eko.say("Budi");
  eko.#sayWithoutName(); //error
  ```

  </details>

- 1:54:44 => instance of digunakan untuk mengecek apakah sebuah objek merupakan instance dari class tertentu atau bukan dengan nilai kembalian boolean (true/false). Jika kita menggunakan typeof maka nilai kembaliannya bukan boolean tetapi object.
  <details>

  ```
  class Employee{
  }

  class Manager{
  }

  const budi=new Employee();
  const eko=new Manager();
            
  console.log(typeof budi) //object

  console.info(budi instanceof Employee); // true
  console.info(budi instanceof Manager); // false
  console.info(eko instanceof Employee); // false
  console.info(eko instanceof Manager); // true
  ```

  </details>

- 1:58:08 => operator instance of mendukung class inheritance untuk mengecek apakah sebuah objek merupakan instance dari class tertentu
  <details>

  ```
  class Employee{
  }
  class Manager extends Employee{
  }
  const budi=new Employee();
  const eko=new Manager();

  console.info(budi instanceof Employee); // true
  console.info(budi instanceof Manager); false
  console.info(eko instanceof Employee); // false => berubah menjadi true
  console.info(eko instanceof Manager); // true
  ```

  <p>Kenapa berubah menjadi true? Karena meskipun eko dibuat dari Manager, tetapi dia adalah turunan dari Employee, sehingga kemampuan yang dimiliki dari Employee otomatis dimiliki oleh Manager</p>

  </details>

<h3>Static class field</h3>

- 2:00:55, 2:01:20
  <p>static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, biasannya ketika kita membuat field atau method, maka secara otomatis field akan menjadi property di instance object, dan method akan menjadi function di prototype.</p>
  <p> Jika kita tambahkan static, maka hal itu tidak terjadi. Jika kita tambahkan static dalam class field, secara otomatis field tersebut bukan lagi milik instance object, melainkan milik class nya itu sendiri.</p>
  <p><b>Biasanya static digunakan jika kita ingin membuat utility field atau function</b>. Cara mengakses static class field pun tidak lagi lewat object, melainkan lewat class nya. <b>Static class field bisa diartikan sifatnya global</b>, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama.</p>
  <details>

  <h3>Dengan static</h3>

  ```
  class Configuration{
      static name="Belajar JavaScript Dasar";
      static version=1.0;
      static author="Eko Kurniawan";
  }
  ```

  <h3>Tanpa static</h3>

  ```
  class Configuration{
      name="Belajar JavaScript Dasar";
      version=1.0;
      author="Eko Kurniawan";
  }

  const config = new Configuration();
  console.info(config);
  console.info(config.name); //undefined
  ```

  <p>2:03:47 => properties dari <code>name, version, author</code> akan menjadi property/field dari config objeknya yang baru diinisiasikan. Tetapi, ketika kita jadikan static, objek confignya kosong jadi ketiganya tidak ikut ke dalam objeknya melainkan dia ada dalam class Configurationnya. Lalu bagaimana cara mengaksesnya? Karena jika kita langsung <code>console.info(config.name)</code>, maka hasilnya akan undefined.</p>
  <p>Cara mengaksesnya adalah seperti ini:</p>

  ```
  console.info(Configuration.name);
  console.info(Configuration.version);
  console.info(Configuration.author);
  ```

  <p>Jadi langsung menyebutkan nama classnya dan dapat diakses secara global.</p>
  <p>Misal kita ubah nama authornya <code>Configuration.author = "Eko Khannedy"</code>, maka authornya juga akan ikut berubah.</p>

  </details>

- 2:07:12 => Static method
  <details>

  ```
  class MathUtil{
    static sum(...numbers){
        let total=0;
        for (const number of numbers){
            total += number;
        }
        return total;
    }
  }
  const sum=MathUtil.sum(1, 1, 1, 1, 1, 1);
  console.info(sum);
  ```

  </details>

<h3>Error</h3>

- 2:10:11 => <code>class erorr</code> di JavaScript merupakan kepala seluruh error yang terjadi di class dan seluruh jenis error yang ada di dalam JS di dokumentasikan <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error?retiredLocale=id">di sini</a>.
- 2:11:29 => kita dapat melakukan <code> throw error</code> untuk dapat melihat errornya apa.
  <details>

  ```
  class MathUtil{
    static sum(...numbers){      
        if (numbers.length === 0){
            throw new Error("Total parameter harus lebih dari 0");
        }
        let result=0;
        for (const number of numbers){
            result += number;
        }
        return result;
    }
  }
  console.info (MathUtil.sum()); //Uncaught Error: pesan error kita
  console.info (MathUtil.sum(1, 1, 1, 1, 1));
  ```

  </details>

- 2:15:37, 2:16:37 => Error handling (try & catch)
  <details>

  ```
  class MathUtil{
    static sum(...numbers){      
        if (numbers.length === 0){
            throw new Error("Total parameter harus lebih dari 0");
        }
        let result=0;
        for (const number of numbers){
            result += number;
        }
        return result;
    }
  }

  try{
    console.info(MathUtil.sum ());
    console.info("Kode Block Try Akan Berhenti");
  } catch(error){
    console.error(`Terjadi error:${error.message}`);
  }

  console.info("Kode Program Tidak Akan Berhenti");
  ```

  </details>

- 2:21:15 => kata kunci finally akan selalu dieksekusi setelah try-catch selesai
  <details>

   ```
  class MathUtil{
    static sum(...numbers){      
        if (numbers.length === 0){
            throw new Error("Total parameter harus lebih dari 0");
        }
        let result=0;
        for (const number of numbers){
            result += number;
        }
        return result;
    }
  }

  try{
    console.info(MathUtil.sum 0);
    console.info ("Kode Block Try Akan Berhenti");
  } catch (error){
    console.error(Terjadi error:${error.message});
  } finally{
    console.info("Kode Program Selesai");
  }

  console.info("Kode Program Tidak Akan Berhenti");
  ```

  </details>

- 2:23:30 => try dengan finally tanpa menggunakan catch
  <details>

   ```
  class Counter{
    constructor (){
        this.value 1;
    }
    next(){
        try{
          return this.value;
        } finally{
            this.value++;
        }
    }
  }
  const counter=new Counter();
  console.info(counter.next());
  console.info(counter.next());
  console.info(counter.next());
  console.info(counter.next());
  console.info(counter.next());
  ```

  <p>Contoh kegunaan try & finally ini ketika kita hendak mengembalikan value tetapi terhalang oleh value yang telah terlebih dahulu di return.</p>

  ```
  class Counter{
    #counter=0;
    next(){
        return this.#counter;
        this.#counter++;
    }
  }

  const counter=new Counter();
  console.info(counter.next());
  console.info (counter.next());
  console.info(counter.next());
  console.info(counter.next());
  console.info(counter.next());
  ```

  </details>

- 2:26:23 => membuat class error secara manual
  <details>

  ```
  class ValidationError extends Error{
    constructor(message, field){
        super(message);
        this.field=field;
    }
  }
  ```
  
  <p>2:29:19 => cara menggunakannya</p>

  ```
  class MathUtil{
    static sum(...numbers){
        if (numbers.length 0){
            throw new ValidationError("Total parameter harus lebih dari 0", "numbers");
        }

        Let result=0;
        for (const number of numbers){
            result += number;
        }
        return result;
      }
  }
  ```

  <p>2:30:04 => Kegunaan membuat class error adalah kita dapat menyisipkan informasi tambahan seperti kita dapat memberitahukan field mana yang error seperti yang ada di <code>throw new ValidationError("Total parameter harus lebih dari 0", "numbers")</code>, kita mau memberitahukan bahwa yang error adalah numbersnya.</p>

  <p>2:30:32 => Kita dapat mengupdate try-catch kita untuk mendapatkan error message yang lebih rinci seperti di bawah ini.</p>

  ```
  try{
    console.info(MathUtil.sum 0);
    console.info ("Kode Block Try Akan Berhenti");
  } catch (error){
      if (error instanceof ValidationError){
        console.errorCTerjadi error di field ${error.field} dengan error:${error.message}`)
      } else{
        console.error(`Terjadi error:${error.message}`);
      }
  }
  ```

  </details>

- 2:33:05, 2:34:41 => iterable dan iterator
  <details>

  ```
  interface Iterable<T>{
    [Symbol.iterator](): Iterator<T>; //T adalah datanya
  }
  ```

  <p>2:35:16 => Kontrak iterator (dalam TypeScript)</p>

  ```
  interface Iterator<T, TReturn=any, TNext=undefined>{
    next(...args: []|[TNext]): IteratorResult<T, TReturn>;
    return?(value?: TReturn): IteratorResult<T, TReturn>;
    throw? (e?: any): IteratorResult<T, TReturn>;
  }
  ```

  <p>2:36:08 => Kontrak: IteratorResult (dalam TypeScript)</p>

  ```
  interface IteratorYieldResult<TYield>{
    done?: false;
    value: TYield;
  interface IteratorReturnResult<TReturn>{
    done: true;
    value: TReturn;
  }
  type IteratorResult<T, TReturn=any> IteratorYieldResult<T>|IteratorReturnResult<TReturn>; 
  ```

  <p>2:37:41 => cara kerja iterable dan iterator</p>
  <p>Jika kita mengikuti kontrak Iterable, maka object yang kita buat akan bisa dilakukan iterasi menggunakan for-of.</p>
  <p>Setiap kita melakukan perulangan, object Iterator akan dibuat. Hal ini menjadi aman jika kita melakukan iterasi berulang-ulang, karena Iterator baru akan dibuat terus menerus.</p>

  ```
  class CounterIteratorResult{
    constructor(value, done){
        this.done=done;
        this.value=value;
    }
  }
  ```

  <p>Kode utuh</p>

  ```
  class CounterIteratorResult{
     constructor (value, done){
        this.value=value;
        this.done=done;
     }
  }
  class CounterIterator{
      constructor (value, max){
          this.value=value;
          this.max=max;
      }
      next(){
          try{
              if (this.value>this.max){
                  return new CounterIteratorResult(this.value, true);
                }else{
                  return new CounterIteratorResult(this.value, false);
          }finally{
              this.value++;
          }
      }
  }

  class Counter{
     constructor (value, max){
        this.value=value; 
        this.max=max;
     }
    [Symbol.iterator](){
        return new CounterIterator (this.value, this.max);
    }
  }

  const counter=new Counter(1, 10)
  for (const element of counter){
      console.info(element);
  }
  ```

  </details>