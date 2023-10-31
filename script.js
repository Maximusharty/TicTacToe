
   function Gameboard(){
    let gameboard_update=[];
    let player_choice='';
    let first_player='';
    let second_player='';
    
    
    
    
    const body=document.querySelector('body');
    const container=document.createElement('div');
    const board=document.createElement('div');
    const create_again=document.createElement('div');
    
    container.classList.add('container');
    const start_game=document.createElement('button');
    start_game.textContent='Start Game';
    start_game.classList.add('start_screen');
    container.appendChild(start_game);
  
    body.appendChild(container);
    start_game.addEventListener('click',()=>{
        start_game.remove();

   
    
    const starting_message=document.createElement('div');
    const btn_holder=document.createElement('div');
    container.appendChild(starting_message);
    container.appendChild(btn_holder);
    btn_holder.classList.add('btn_holder');
    starting_message.classList.add('starting_screen');
    starting_message.textContent='Which player is starting first?';
    
   
    
    const player1_btn=document.createElement('button');
    const player2_btn=document.createElement('button');
    player1_btn.textContent='Player1';
    player2_btn.textContent='Player2';
    player1_btn.classList.add('player1');
    player2_btn.classList.add('player2');
    btn_holder.appendChild(player1_btn);
    btn_holder.appendChild(player2_btn);
   
    const btn=document.querySelectorAll('button');
    btn.forEach((button)=>{
        button.addEventListener('click',()=>{
            
            if(button.textContent=='Player1'){
                container.remove();
                 first_player='Player1';
                 second_player='Player2';
                playerchoice(first_player,second_player);
               
                
                
            }
            else {
                container.remove();
                first_player='Player2';
                second_player='Player1';
                playerchoice(first_player,second_player);
                
                
               
               
            }
        })
    })
})

    
   
   
 

   
    function playerchoice(Player1,Player2){
        

        const sub_container=document.createElement('div');
        
        const query=document.createElement('div');
        const button_holder=document.createElement('div');
        button_holder.classList.add('button_holder');
        query.classList.add('query');
        const cross=document.createElement('button');
        const circle=document.createElement('button');
        sub_container.classList.add('sub_container');
        cross.classList.add('cross');
        circle.classList.add('circle');
        cross.textContent='X';
        circle.textContent='O';
        
        
        query.textContent=Player1+","+" What do you choose?";
        sub_container.appendChild(query);
        button_holder.appendChild(cross);
        button_holder.appendChild(circle);
        sub_container.appendChild(button_holder);
        
        body.appendChild(sub_container);
        const btn=document.querySelectorAll('button');
        
        btn.forEach((button)=>{
            button.addEventListener('click',()=>{
                if(button.textContent=='X'&&Player1=='Player1'){
                     player_choice='X';
                   
                   
                    sub_container.remove();
                    gameboard();
                     element_interaction(player_choice,Player1);
                    
                    
                    
                }
                else if(button.textContent=='X'&&Player1=='Player2'){
                    player_choice='X';
                    
                    
                    
                    sub_container.remove();
                    gameboard();
                    element_interaction(player_choice,Player1);
                    
                    
                    
                    
                }
                else if(button.textContent=='O'&&Player1=="Player1"){
                     player_choice='O';
                    
                    
                    sub_container.remove();
                    gameboard();
                    element_interaction(player_choice,Player1);
                    

                }
                else if(button.textContent=='O'&&Player1=="Player2"){
                     player_choice='O';
                   
                    
                    sub_container.remove();
                    gameboard();
                    element_interaction(player_choice,Player1);

                }
                
            })
            
        })
        
        
        


        
     
    
    
    
    
       }
       function display_winner(winner_choice){
        board.remove();
        const winners_message=document.createElement('div');
        winners_message.classList.add('winner');
        create_again.appendChild(winners_message);
        body.appendChild(create_again);
        
        if(winner_choice===player_choice){
            
            
            winners_message.textContent=first_player+ ' is the winner';
            
      

            
        }
        else if(winner_choice===''){
            winners_message.textContent= 'It is draw';

        }
        else{
            winners_message.textContent= second_player+ ' is the winner';
        }
       }
       
      
    
     
  

    function gameboard(){
       
      
       
        const outer_container=document.createElement('div');
        outer_container.classList.add('board_space');
        board.appendChild(outer_container);
        body.appendChild(board);
        
        
      

        for(i=0;i<9;i++){
           
            
            const tic_tac_square=document.createElement('div');
            tic_tac_square.classList.add('gamecell');
            gameboard_update.push(tic_tac_square);
            
            outer_container.appendChild(tic_tac_square);
            
           
           
            

      
            

        }
        
    }
         function element_interaction(choice,player){
            const selection_square=document.querySelectorAll('.gamecell');
            

          

            selection_square.forEach((cell)=>{
                let count=0;
                cell.addEventListener('click',()=>{
                  
                    if(count<1){

                    
                    
                    
                    
                        if(player=="Player1"){
                            cell.textContent=choice;
                            tic_tac_game();
                          
                            
                            
                            
                            
                            player="Player2";
                            if(choice=="X"){
                                choice='O';
                            }
                            else{
                                choice='X';
                            }
                            
                            
                            
                        }
                        else if(player=="Player2"){
                            cell.textContent=choice;
                            tic_tac_game();
                            
                            player="Player1";
                            if(choice=='X'){
                                choice='O';
                            }
                            else{
                                choice='X';
                            }
                            
                            
                           
                        }
                    }
                        count++;
                    
                    
                })
            })
            

        }
      


      
        function tic_tac_game(){
           let  game_choice=gameboard_update.map((element)=>{
                 return element.textContent;
            })
            const playing_again=document.createElement('button');
            const play_again_div=document.createElement('div');
            play_again_div.classList.add('play_again_div');
            playing_again.classList.add('playing_again');
            playing_again.textContent='Play Again';
            
            
           let game_choice_update=[[],[],[]]
           let winner=0;
            
            for(i=0;i<9;i++){
                if(i<3){
                    game_choice_update[0].push(game_choice[i]);
                }
                if(i>2&&i<6){
                    game_choice_update[1].push(game_choice[i]);
                }
                if(i>5&&i<9)
                    game_choice_update[2].push(game_choice[i]);
                }
               
                for(i=0;i<3;i++){
                    if(game_choice_update[0][i]!==''){
                    if((
                        (game_choice_update[0][i]===game_choice_update[1][i])&&(game_choice_update[1][i]===game_choice_update[2][i])
                    )||((game_choice_update[0][i]===game_choice_update[1][i+1])&&(game_choice_update[1][i+1]===game_choice_update[2][i+2]))||
                    ((game_choice_update[0][i]===game_choice_update[1][i-1])&&(game_choice_update[0][i]===game_choice_update[2][i-2]))){
                        display_winner(game_choice_update[0][i])
                        winner=winner+1;
                       
                        
                        play_again_div.appendChild(playing_again);
                        create_again.appendChild(play_again_div);
                        
                        playing_again.addEventListener('click',()=>{
                            create_again.remove();
                            
                            play_again(playing_again);
                        })
                        
                        
                    }
                    
                }
                  
                    for(j=0;j<3;j++){
                        
                        
                        if(game_choice_update[i][j]!==''){
                           
                            if(((game_choice_update[i][j]===
                                game_choice_update[i][j+1])&&(game_choice_update[i][j+1]===game_choice_update[i][j+2])))
                               {
                                
                               
                              display_winner(game_choice_update[i][j]);
                              winner=winner+1;
                            
                              play_again_div.appendChild(playing_again);
                              create_again.appendChild(play_again_div);
                              playing_again.addEventListener('click',()=>{
                                create_again.remove();
                                  
                                  play_again(playing_again);
                              })
                              
                               
                                 
                            }
                          
                        }
                    }
                }
                        
                    let number=0;
                    for(i=0;i<3;i++){
                        for(j=0;j<3;j++){
                            if(game_choice_update[i][j]===''){
                                number=number+1;
                            }

                            
                        }
                        
                    }
                    if(number==0&&winner==0){
                        
                            display_winner('');
                            
                            
                            play_again_div.appendChild(playing_again);
                            create_again.appendChild(play_again_div);
                            playing_again.addEventListener('click',()=>{
                                create_again.remove();
                                
                                play_again(playing_again);

                            })
                        
                    }
                    
                
                }

              
               
            
            
           
           
            


       
        
      
            
            
    }
    Gameboard();
    function play_again(playing_again){
        playing_again.remove();
        Gameboard();
       
    }
        
     
      
    
   
    
       


    


