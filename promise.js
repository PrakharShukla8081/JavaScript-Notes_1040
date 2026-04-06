// const myPromise = new Promise((resolve,reject)=>{
//   resolve("Hello Promise is Resolved    ")
// })

// myPromise.then((res)=>(console.log(res)))


function myPromise(num){
  return new Promise((res, rej)=>{
    if(num>2)
      res("this is resolved")
    else  
      rej("this is rejected")
  })
}

const finalRes= async () => {
  try {
    const result = await myPromise(5)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// This is final
finalRes()




