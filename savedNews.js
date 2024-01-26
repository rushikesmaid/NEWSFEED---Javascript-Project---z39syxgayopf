   
        document.addEventListener('DOMContentLoaded', () => {
            let likedNews = document.getElementById('likedNews')
            // Retrieve liked news data from localStorage
            const likedNewsData = localStorage.getItem('likedNews');
            console.log("h",likedNewsData);
            if (likedNewsData) {
                const likedNews = JSON.parse(likedNewsData);
                displayLikedNews(likedNews);
                console.log(likedNews);
            } else {
                likedNews.innerHTML = 'No Saved news🥲';
            }
        });
        console.log("local",localStorage);
        function displayLikedNews(likedNews) {

            const likedNewsContainer = document.getElementById('likedNews');
          
            
            likedNews.forEach((element,index) => {
                let newsDiv = document.createElement('div');
                newsDiv.className = 'newsDiv';
                newsDiv.style.color = 'black';
                newsDiv.style.borderRadius = '10px';
                newsDiv.style.height = '130px';
                newsDiv.style.width = '800px';
                newsDiv.style.marginLeft = '350px';
                newsDiv.style.marginTop = '10px';
                newsDiv.style.background = 'lightgray'
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
                likeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="40px" height="40px">
       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
   </svg>`
                likeButton.classList.add('far');
                likeButton.style.marginLeft = '750px';
                likeButton.style.fontSize = '40px';
               // likeButton.style.background = 'red'
                likeButton.addEventListener('dblclick', () => {
                   
                    likedNewsContainer.removeChild(newsDiv);
                
                    const likedNews = JSON.parse(localStorage.getItem('likedNews')) || [];

                    likedNews.splice(index, 1); 
               
                    
                    localStorage.setItem('likedNews', JSON.stringify(likedNews));
                    if (likedNews.length === 0) {
                        likedNewsContainer.innerHTML = 'No Saved news.🥲';
                        likedNewsContainer.style.textAlign = 'center'
                        likedNewsContainer.style.fontSize = '20px'
                    }
                    alert('News Unliked!');
                    
                });
               
                para.innerHTML = `${element.content}... `;
                para.appendChild(readMoreElement);
 
                newsDiv.appendChild(author);
                newsDiv.appendChild(category);
                newsDiv.appendChild(para);
                newsDiv.appendChild(likeButton);
        
                document.getElementById('likedNews') .appendChild(newsDiv);
            });
           if (likedNewsContainer) {
            
           }
        }
 
