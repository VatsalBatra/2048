#include<iostream>
#include<cstdlib>
using namespace std;
 int randR=-1,randC = -1,counter = 0,score=0;
 int randrowindex(){
	return rand()%4;

}
 int randcolindex(){
	return rand()%4;
}
 int getrandomvalue(){
    int  random = rand()%10;
    if(random < 8){
        return 2;
    }
    else{
        return 4;
    }
}
void fillrandom(int  a[][4]){
    randR = randrowindex();
    randC = randcolindex();
    if(a[randR][randC] != 0){
        fillrandom(a);
    }
     int value = getrandomvalue();
    a[randR][randC] = value;
}
void newgame( int a[][4]){
	int i=0;
    for(  i=0;i<4;i++){
        for(int j=0;j<4;j++){
            a[i][j] = 0;
        }
    }
  
    while(i<2){


        randR = randrowindex();
        randC = randcolindex();
        if(a[randR][randC] == 0){
            a[randR][randC] = getrandomvalue();
            i++;
        }
        
    }
}
void gridreset( int a[][4]){
	counter=0;
    for( int i=0;i<4;i++){
        for( int j=0;j<4;j++){
            a[i][j] = 0;
        }
    }
    while(1){
        randR = randrowindex();
        randC = randcolindex();
        if(a[randR][randC] == 0){
            a[randR][randC] = getrandomvalue();
            counter++;
        }
        if(counter == 2){
            break;
        }
    }
}

void transpose( int a[][4],int  row, int col){
	for (int i=0;i<row;i++){
		for(int j=0;j<col;j++){
			if (j < i){
				int temp = a[i][j];
				a[i][j] = a[j][i];
				a[j][i] = temp;
			}
		}
	}
}
void antirotate(int a[][4], int row,int col){
	transpose(a,4,4);
	for (int i=0;i<col;i++){
		for( int j=0;j<row/2;j++){
				int temp = a[j][i];
				a[j][i] = a[row-1-j][i];
				a[row-1-j][i] = temp;
			
		}
	}
}
void rotate( int a[][4],int row,int col){
	for ( int i = 0; i < row / 2; i++) {
        for ( int j = i; j < col - i - 1; j++) {
            
             int tmp = a[i][j];
            a[i][j] = a[4 - j - 1][i];
            a[4 - j - 1][i] = a[4 - i - 1][4 - j - 1];
            a[4 - i - 1][4 - j - 1] = a[j][4 - i - 1];
            a[j][4 - i - 1] = tmp;
        }
    }
}
 /* 
 void down( a[][4], row, col){
 for( j = 0;j<4;j++){
        for( i = 1;i<4;i++){
            for( k = i;k>0;k--){
                if(a[k][j] == 0){
                    a[k][j] = a[k-1][j];
                    a[k-1][j] = 0;
                }
                else if(a[k-1][j] == a[k][j]){
                    a[k][j] = a[k-1][j] * 2;
                    a[k-1][j] = 0;
                    break;
                }
                else{
                    continue;
                }
            }
        }
    }
 }*/


void down( int a[][4],int  row, int col){
    for( int j = 3;j>=0;j--){
        for(int i=3;i>=0;i--){
           
                if(a[i][j] != 0){
                    int g=0;
                    for(int k=i+1;k<=3;k++){
                        if(a[k][j]==0){
                            g++;
                        } 
                        else{
                            break;
                        }
                    
                    }
                   
                    if(g!=0){ 
                    a[i+g][j]=a[i][j];
                    a[i][j]=0;
                    }    

            }
        }
    }
    for( int j = 3;j>=0;j--){
        for(int  i=2;i>=0;i--){ 
            if (a[i+1][j]==a[i][j])
            {
                a[i+1][j]=2*a[i+1][j];
                int k=i;
                while(k>0){
                    a[k][j]=a[k-1][j];
                    a[k-1][j]=0;
                    k--;
                }
                if(k==0){
                    a[k][j]=0;
                }

            }
        
        }
    } 
}

/*

	for ( i=0;i<row;i++){
    		for( j=0;j<col;j++){
			if(a[i][j]==0){
				for( k=i;k>0;k--){
				a[k][j]=a[k-1][j];
				a[k-1][j]=0;
				}
			}	
		}
	}
	for ( i=row-1;i>0;i--){
		for( j=col-1;j>=0;j--){
			
			if(a[i][j]==a[i-1][j]){
				if(i-1>=0){
					if(score==0){
						score=2*(a[i][j]);
					}
					else{
						score=score+(2*(a[i][j]));
					}
				a[i][j] = a[i][j]+a[i-1][j];
				a[i-1][j]=0;
				for( k=i-1;k>0;k--){
				a[k][j]=a[k-1][j];
				a[k-1][j]=0;
				}
				}
				
			}
		}	
	}*/

void up( int a[][4],int row, int col){
	antirotate(a,4,4);
	antirotate(a,4,4);
	down(a,4,4);
	rotate(a,4,4);
	rotate(a,4,4);
}
void right( int a[][4], int row, int col){
	antirotate(a,4,4);
	antirotate(a,4,4);
	antirotate(a,4,4);
	down(a,4,4);
	antirotate(a,4,4);
}
void left( int a[][4], int row, int col){
	antirotate(a,4,4);

	down(a,4,4);
	rotate(a,4,4);
}
void print_matrix( int a[][4], int row, int col){
	for( int i=0;i<row;i++){
		for( int j=0;j<col;j++){
			cout<<a[i][j]<<" ";
		}
		cout<<endl;
	}

}
void copy( int a[][3],int  b[][3],int col, int row){   //RETURN TYPE???
	for (int i=0;i<row;i++){
		for( int j=0;j<col;j++){
			b[i][j]=a[i][j];
		}
	}

return ;
}
bool checker( int a[][4], int row, int col){
	 int x=0;
	for (int  i=0;i<row;i++){
		for( int j=0;j<col;j++){
			if(a[i][j]==0){
				x++;
				

			}


			if(a[i][j]==2048){
				cout<<"you won"<<endl;
				return 1;

			}
			
		}
	}
	if(x==0){
		cout<<"you lose"<<endl;
		return 1;
	}

				return 0;
}
int main(){

	// a[4][4];
	
//	for ( i=0;i<4;i++){
//		for( j=0;j<4;j++){
		//	a[i][j] = 2;
			
//		}
//	} 

	 int  a[4][4];
	  gridreset(a);
	print_matrix(a,4,4);
   char key;
    cout<<"Enter the direction you want to move : "<<endl;
    cout<<"W to move up"<<endl;
    cout<<"S to move down"<<endl;
    cout<<"A to move left"<<endl;
    cout<<"D to move right"<<endl;
    cout<<"N for new game"<<endl;

   

    cin>>key;
    while(1){
    	int x =checker(a,4,4);
    	 if(x==1){
    	return 0;
    }
        switch(key){
            case 'w':
               up(a,4,4);
               fillrandom(a);
               print_matrix(a,4,4);
               cout<<endl<<score<<endl;
                break;
            case 'a':
               left(a,4,4);
               fillrandom(a);
               print_matrix(a,4,4);
               cout<<endl<<score<<endl;
               


                break;
            case 's':
               down(a,4,4);
                fillrandom(a);
               print_matrix(a,4,4);
               cout<<endl<<score<<endl;

                break;

            case 'd':
             right(a,4,4);
             fillrandom(a);
               print_matrix(a,4,4);
               cout<<endl<<score<<endl;

                break;
            case 'n':
            	newgame(a); //OR MAKE VALUE OF COUNTER =1 EVERY TIME U ENTER GRIDRESET FUNCTION LIKE I DID 
				print_matrix(a,4,4);

                break;
            default:
                cout<<"Please enter the correct key make sure CAPS is OFF"<<endl;
                break;
        }
        cout<<"Press the next key : ";
        cin>>key;
    }
    return 0;

}