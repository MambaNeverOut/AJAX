let n = 1 //页数

getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const style = document.createElement('style')
      style.innerHTML = request.response
      document.head.appendChild(style)
    }
  }
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const script = document.createElement('script')
      script.innerHTML = request.response
      document.head.appendChild(script)
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const div = document.createElement('div')
      div.innerHTML = request.response
      document.body.appendChild(div)
    }
  }
  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const XML = request.responseXML
      const text = XML.getElementsByTagName('warning')[0].textContent.trim()
      console.log(text);
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response)
      console.log(object.name);
    }
  }
  request.send()
}

getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n+1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const array = JSON.parse(request.response)
      array.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}




// getCSS.onclick = () => {
//   const request = new XMLHttpRequest()
//   request.open('GET', 'style.css')
//   request.onreadystatechange = () => {
//     console.log(request.readyState);
//     if (request.readyState === 4) {
//       if (request.status >= 200 && request.status < 300) {
//         const style = document.createElement('style')
//         style.innerHTML = request.response
//         document.head.appendChild(style)
//       } else {
//         alert('加载CSS失败')
//       }
//     }
//   }
//   request.onerror = () => {
//     console.log('no');
//   }
//   request.send()
// }