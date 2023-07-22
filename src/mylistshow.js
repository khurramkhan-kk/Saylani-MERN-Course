

export default function List_work(){

    const people = [
        "https://th.bing.com/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?pid=ImgDet&rs=1"
      ];
    
        // let showitems = show_numbers.sort();
        let show_item_list = people.map(person =>  <li><img src={person} /></li>);
    
        console.log(show_item_list);

    return<>
    <h1>Random number list</h1>
    <ol>
        {show_item_list}
    </ol>
   
    </>
}