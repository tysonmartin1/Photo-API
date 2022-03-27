
// Header //
const header = document.getElementById('header');
const headerContent = document.createElement('div');

headerContent.setAttribute('id','header-content');

headerContent.innerHTML =`
<div id= "website-icon">
    <path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#05A081">
     </path>
    <path d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z" fill="#fff">
        </path>
    <h3>Pexels</h3
</div>

<div id= "header-nav">
    <div class= "header-nav-selector">
        Explore
    </div>
    <div class= "header-nav-selector">
        License
    </div>
    <div class= "header-nav-selector">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path d="M3.805 7.2h.503a.63.63 0 0 0 .629.629.63.63 0 0 0 .629-.629h.503c0 .625-.507 1.132-1.132 1.132S3.805 7.826 3.805 7.2zm4.403-.63v.126a.5.5 0 0 1-.503.503h-5.535c-.278 0-.503-.225-.503-.503v-.126a.88.88 0 0 1 .755-.872v-1.518c0-1.4 1.126-2.516 2.516-2.516s2.516 1.126 2.516 2.516V5.7a.88.88 0 0 1 .755.872zm-.503 0c0-.21-.17-.377-.378-.377s-.376-.17-.376-.376V4.182c0-1.11-.9-2.013-2.013-2.013s-2.013.9-2.013 2.013V5.82c0 .208-.17.376-.376.376s-.378.17-.378.377v.126h5.535v-.126z" fill="#fff" fill-rule="nonzero" stroke-width="0"></path></svg>
    </div>
    <div class= "header-nav-selector">
        <div class= "profile-selector">
            <div id= "avatar-img">
                <img alt="avatar" class="js-avatar" src="https://www.gravatar.com/avatar/0c8c5ba9e61d4452cd081ff65be9aaf2?s=60&amp;d=mm">
            </div>
        </div>
        <div class= "profile-selector">
            <div id= "drop-down-selector">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z">
                    </path>
                </svg>
            </div>
        </div>
    </div>
    <div class= "header-nav-selector">
        <button>Upload</button>
    </div>
</div>

`;

header.appendChild(headerContent)

console.log(header)


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       
       console.log(xhttp)
    }
};
xhttp.open("GET", "https://api.pexels.com/v1/search?query=people", true);
xhttp.setRequestHeader('Authorization','563492ad6f9170000100000117fbdd87182b491c8bf0b2a95c269509')
xhttp.send();