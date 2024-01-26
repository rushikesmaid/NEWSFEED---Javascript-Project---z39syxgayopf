
async function newsData() {
    try {
        let newsUrl = await fetch('https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews');
        let newsData = await newsUrl.json();
    
        console.log(newsData);
        let content = document.querySelector('.content');
        let buttons = document.querySelectorAll('button');
        let allbtn = document.querySelector('#allbtn');
        let business = document.querySelector('#businessbtn');
        let sportbtn = document.querySelector('#sportbtn');
        let worldbtn = document.querySelector('#worldbtn');
        let politicsbtn = document.querySelector('#politicsbtn');
        let hatkebtn = document.querySelector('#hatkebtn');
        let technologybtn = document.querySelector('#technologybtn');
        let automobilebtn = document.querySelector('#automobilebtn');
        let entertainmentbtn = document.querySelector('#entertainmentbtn');
        let startupsbtn = document.querySelector('#startupsbtn');
    
        allbtn.style.background = '#008CBA';
       function allbtnFun(){
        for (let i = 0; i < newsData.length; i++) {
            newsData.forEach(element =>{
            // console.log(ele);
            let newsDiv = document.createElement('div')
            newsDiv.className = 'newsDiv'
        newsDiv.style.marginLeft = '350px'
        newsDiv.style.marginTop = '10px'
         newsDiv.style.borderRadius = '10px';  // Set border radius
         newsDiv.style.height = '130px';  // Set height
         newsDiv.style.width = '800px';   // Set width
        // newsDiv.style.margin = '20px'
       
     
         let author = document.createElement('span')
         author.className = 'authorname'
         let category = document.createElement('span')
         category.className = 'categoryName'
         let para = document.createElement('p')
         para.className = 'para'
         let authorName = element.author
         //console.log(authorName);
         author.innerHTML = `By <b>${authorName}</b>`
         category.innerHTML =` CATEGORY  <b>${element.category}</b>`
         let readMoreElement = document.createElement('span')
        // readMoreElement.className = 'read-more-link'
         readMoreElement.innerHTML = `<a href="${element.url}" style="text-decoration: none ; color: blue; font-weight: 700;">READ MORE</a>`;
       
         let likeButton = document.createElement('i')
       likeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" width="40px" height="40px">
       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
   </svg>`
       //likeButton.classList.add('far')
        likeButton.style.marginLeft = '750px'
       // likeButton.style.fontSize = '40px'
    
        likeButton.addEventListener('dblclick',()=>{
            let newArr = JSON.parse(localStorage.getItem('likedNews')) || [];
                newArr.push(element)
                localStorage.setItem('likedNews', JSON.stringify(newArr))
                likeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="40px" height="40px">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>`
                
                
                alert('News Liked!');
        })
        para.innerHTML = `${element.content}... `
        para.appendChild(readMoreElement)
                 newsDiv.appendChild(author)
                 newsDiv.appendChild(category)
                 newsDiv.appendChild(para)
                 newsDiv.appendChild(likeButton)
        content.appendChild(newsDiv)
            })
         
         }
      
       }
       allbtnFun();
       function handleAllButtonClick() {
        clearContentAndSetBackground(allbtn);
       allbtnFun()
    }
        allbtn.addEventListener('click', handleAllButtonClick);
            function clearContentAndSetBackground(button) {
        content.innerHTML = '';
        buttons.forEach(btn => {
            btn.style.background = '#FFE140';
        });
        button.style.background = '#008CBA';
        }
        function createNewsDiv(element) {
            let newsDiv = document.createElement('div');
            newsDiv.className = 'newsDiv';
            newsDiv.style.color = 'black';
            newsDiv.style.borderRadius = '10px';
            newsDiv.style.height = '130px';
            newsDiv.style.width = '800px';
            newsDiv.style.marginLeft = '350px';
            newsDiv.style.marginTop = '10px';
    
            let author = document.createElement('span');
            author.className = 'authorname';
            let category = document.createElement('span');
            category.className = 'categoryName';
            let para = document.createElement('p');
            para.className = 'para';
    
            let authorName = element.author;
            author.innerHTML = `By <b>${authorName}</b>`;
            category.innerHTML = ` CATEGORY  <b>${element.category}</b>`;
    
            let readMoreElement = document.createElement('span');
            readMoreElement.innerHTML = `<a href="${element.url}" style="text-decoration: none ; color: blue; font-weight: 700;">READ MORE</a>`;
    
            let likeButton = document.createElement('i');
            likeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" width="40px" height="40px">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>`
         //   likeButton.classList.add('far');
            likeButton.style.marginLeft = '750px';
            likeButton.style.fontSize = '40px';
        
            likeButton.addEventListener('dblclick', () => {
                let newArr = JSON.parse(localStorage.getItem('likedNews')) || [];
                newArr.push(element)
                localStorage.setItem('likedNews', JSON.stringify(newArr))
           
                likeButton.style.color  = 'red';
            
                likeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="40px" height="40px">
       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
   </svg>`
                alert('News Liked!');
                
            });
      
        
            para.innerHTML = `${element.content}... `;
            para.appendChild(readMoreElement);
    
            
 
            newsDiv.appendChild(author);
            newsDiv.appendChild(category);
            newsDiv.appendChild(para);
            newsDiv.appendChild(likeButton);
    
            content.appendChild(newsDiv);
        }
    
        function handleCategoryClick(category, button) {
            clearContentAndSetBackground(button);
            let filteredNews = newsData.filter(ele => ele.category === category);
            console.log(filteredNews);
    
            filteredNews.forEach(element => {
                createNewsDiv(element);
            });
        }
    
        function addCategoryClickListener(category, button) {
            button.addEventListener('click', () => handleCategoryClick(category, button));
        }
    
        addCategoryClickListener('Business', business);
        addCategoryClickListener('Sports', sportbtn);
        addCategoryClickListener('International', worldbtn);
        addCategoryClickListener('Politics', politicsbtn);
        addCategoryClickListener('Hatke', hatkebtn);
        addCategoryClickListener('Technology', technologybtn);
        addCategoryClickListener('Automobile', automobilebtn);
        addCategoryClickListener('Entertainment', entertainmentbtn);
        addCategoryClickListener('Startups', startupsbtn);
        
        
    } catch (error) {
        alert(error)
    }
   
}

newsData();
