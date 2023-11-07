// const array = [1,2,3,4,5]. Yeni array yaradın və bu array-in əksinə düzülmüş formada olsun (e.x [5,4,3,2,1])

// const strArray = ["cat","mouse","panter","chicken"] bu array-dən "cat" sözünü silin və sonuna "bird" əlavə edin.

// const array = [1,2,3,4,5]. Bu ədədlərin yanına kvadrat-ların əlavə edin. (e.x [1,2,3,4,5,1,4,9,16,25])

// Ədədlərdən ibarət array verilir. Array-də olan cüt ədədləri ekrana çıxardın.(Əlavə: yeni array-ə əlavə edin cüt ədədləri)
       //ÇALIŞMA-1

       const array = [1, 2, 3, 4, 5]
       const newArray = array.reverse()
       console.log(newArray)
       
       // ÇALIŞMA--2
       
       const strArray = ["cat","mouse","panter","chicken"]
       strArray.shift()
       strArray.unshift("brid") 
       console.log(strArray)
       
       //  ÇALIŞMA--3
       
       const array2 = [1,2,3,4,5]
       for(let i = 0; i < 5; i++){
           array2.push(array2[i] ** 2)
       }
       console.log(array2);
       
       // ÇALIŞMA--4
       
       const array4 = [1, 2, 3, 4, 5, 6,7,8,9]
       const newArray4 = []
       for (let i = 0; i < array4.length; i++) {
        if(array4[i] % 2 == 0){
            yeniArray.push(array4[i])
        }
    }
    console.log(newArray4)
