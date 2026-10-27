const arr=[{src:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",cloth:"Tshirt",offer:"50-60%",avail:"In Stock",price:344},
    {src:"https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",cloth:"SHirt",offer:"50-60%",avail:"In Stock",price:1200},
    {src:"https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",cloth:"Lehenga",offer:"40-60%",avail:"In Stock",price:12020},
    {src:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",cloth:"Shoe",offer:"80-60%",avail:"In Stock",price:120}
,{src:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",cloth:"Tshirt",offer:"50-60%",avail:"In Stock",price:234},
    {src:"https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",cloth:"SHirt",offer:"50-60%",avail:"In Stock",price:120},
    {src:"https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",cloth:"Lehenga",offer:"40-60%",avail:"In Stock",price:2200},
    {src:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",cloth:"Shoe",offer:"80-60%",avail:"In Stock",price:2344}]

// utils folder is used to store data,photos and videos like utility folder

//whenever const arr is there u cannot use export default there it self
//it should be written seperately

//Note : there should only one export default per page


//if u want to export multiple functions or other ,use below method to export multiple
export function greet(){
    return(<>
     <h1>Hello I Am Greet Function</h1>
        <h2>Its Nice to use Components to write clean and good code</h2>
    </>
       
    )
}

export function Meet(){
    return(<>
     <h1>Hello I Am Meet Function</h1>
        <h2>Its Nice to use Components to write clean and good code</h2>
        <h3>there should only one export default per page and other should have export as keyword there itself</h3>
    </>
       
    )
}

export default arr;