import React from "react";

function Menu() {
  return (
    <div >
      <h1 className="font-Send text-6xl text-center">Our Menu</h1>
      <p className="font-bold text-center text-3xl">Burger</p>
      <div className="mt-10 md:flex justify-around hover cursor-pointer">
        <div>
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid
            =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80"
            className=" md:h-30 md:w-48 h-1/2"alt=""
          />
          <p className="text-xl text-cyan-500 text-center">Hamburger</p>
       </div>
        <div>
          <img
             src="https://images.unsplash.com/photo-1599155253646-7989e08c05c1?ixlib=rb-1.2.1&ixid
            =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80"
             className="md:h-50 md:w-48 h-1/2"alt=""
          />
         <p className="text-xl text-cyan-500 text-center">cheeseburger</p>
       </div>
       <div>
        <img
          src="https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&ixid
          =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="md:h-50 md:w-48 h-1/2"alt=""
         />
          <p className="text-xl text-cyan-500 text-center">Bacon Burger</p>
       </div>
       <div>
          <img
            src="https://images.unsplash.com/photo-1630278156268-12d56c2e135f?ixlib=rb-1.2.1&ixid
             =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
             className="md:h-50 md:w-48 h-1/2"alt=""
           />
          <p className="text-xl text-cyan-500 text-center">Beef Burger</p>
       </div>
    </div>
      <p className="font-bold text-center text-3xl pt-10">Pasta</p>
    <div className="mt-10 md:flex justify-around hover cursor-pointer"> 
        <div>
          <img
            src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&ixid
            =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            className=" md:h-36 md:w-48 h-1/2 "alt=""
          />
          <p className="text-xl text-cyan-500 text-center">Seasame Pasta</p>
       </div>
        <div>
          <img
             src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid
             =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
             className="md:h-50 md:w-48 h-1/2"alt=""
          />
         <p className=" text-xl text-cyan-500 text-center">Seafood Pasta</p>
       </div>
       <div>
        <img
          src="https://images.unsplash.com/photo-1587206668283-c21d974993c3?ixlib=rb-1.2.1&ixid
          =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          className="md:h-50 md:w-48 h-1/2"alt=""
         />
          <p className="text-xl text-cyan-500 text-center">Fresh tomato</p>
       </div>
       <div>
          <img
            src="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&ixid
            =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
             className="md:h-40 md:w-48 "alt=""
           />
          <p className=" text-xl text-cyan-500 text-center">Spiced Pasta</p>
      </div>
    </div>
    <p className="text-3xl text-center font-bold pt-5">Pizza</p>
    <div className="mt-10 md:flex justify-around hover cursor-pointer">
        <div>
          <img
            src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid
            =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"alt=""
            className=" md:h-30 md:w-48 h-1/2"
          />
          <p className="text-xl text-cyan-500 text-center">sjjl Pizza</p>
       </div>
        <div>
          <img
             src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid
             =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=502&q=80" alt=""
             className="md:h-50 md:w-40 h-1/2"
          />
         <p className="text-xl text-cyan-500 text-center">cheese Pizza</p>
       </div>
       <div>
        <img
          src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid
          =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt=""
          className="md:h-50 md:w-48 h-1/2"
         />
          <p className="text-xl text-cyan-500 text-center">Pepperoni</p>
       </div>
       <div>
          <img
            src="https://images.unsplash.com/photo-1627461985459-51600559fffe?ixlib=rb-1.2.1&ixid
            =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""
             className="md:h-50 md:w-48 h-1/2"
           />
          <p className="text-xl text-cyan-500 text-center">Beef Pizza</p>
      </div>
    </div>
    </div>
  );
}

export default Menu;
