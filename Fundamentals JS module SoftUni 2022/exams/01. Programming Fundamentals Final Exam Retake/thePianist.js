function thePianist(input) {
    let num = Number(input.shift());
    const playList = {};
    
    for (let i = 0; i < num; i++) {
      let [nameOfSong, composer, key] = input.shift().split('|');
      playList[nameOfSong] = composer + ':' + key
    }
    
    let command = input.shift();
    
    while (command !== 'Stop') {
      command = command.split('|')
     let action = command.shift()
     
      switch (action) {
        case 'Add':
           let [piece, compositor, key1] = command;
          if (playList.hasOwnProperty(piece)) {
             console.log(`${piece} is already in the collection!`)
           } else {
           playList[piece] = compositor + ':' +  key1
           console.log(`${piece} by ${compositor} in ${key1} added to the collection!`);
          }
          break;
          
        case 'Remove':
          let piece2 = command;
          if (!playList.hasOwnProperty(piece2)) {
            console.log(`Invalid operation! ${piece2} does not exist in the collection.`);
          } else {
            delete playList[piece2];
            console.log(`Successfully removed ${piece2}!`)
          }
          break;
          
        case 'ChangeKey':
          let [piece3, newKey] = command;
           if (playList.hasOwnProperty(piece3)) {
             let stringToRepl = playList[piece3].substring((playList[piece3].lastIndexOf(':') + 1))
             playList[piece3] = playList[piece3].replace(stringToRepl, newKey)
             console.log(`Changed the key of ${piece3} to ${newKey}!`)
           } else {
             console.log(`Invalid operation! ${piece3} does not exist in the collection.`)
           }
          break;
      }
      
      command = input.shift();
    }
    
    let properties = Object.entries(playList);
    for (let [name, info] of properties) {
      let [composer, finalKey] = info.split(':');
      console.log(`${name} -> Composer: ${composer}, Key: ${finalKey}`)
    }
    
  } 