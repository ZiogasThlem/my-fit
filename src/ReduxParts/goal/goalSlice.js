import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const apiUrl = process.env.REACT_APP_API_LOCAL_URL;
const apiKey = process.env.REACT_APP_API_LOCAL_KEY;

export const getAllGoalsAsync = createAsyncThunk(
    'goal/getAllGoalsAsync',
    async ()=>{
        const resp = await fetch(`${apiUrl}goal`);
        if(resp.ok){
            const goals = await resp.json();
        //    console.log(exercises);
            return goals;
        }
    }
)

export const updateGoalAsync = createAsyncThunk('goal/updateGoalAsync',
    async(payload)=>{
        
        const resp = await fetch(`${apiUrl}goal/${payload.id}`,{
            method:'PATCH',
            headers:{'Content-type': 'application/json',
                'x-api-key':apiKey
                },
            
            body:JSON.stringify(
                // desc:payload.desc
                payload.itemPayload
            )
        });
        if(resp.ok){
            const goal = await resp.json();
            return goal;
        }
    }
    
);

export const addGoalAsync = createAsyncThunk('goal/addGoalAsync',
    async(payload)=>{
        const resp = await fetch(`${apiUrl}goal`,{
            method: 'POST',
            headers:{'Content-type': 'application/json',
            'x-api-key':apiKey
            },
            
            body:JSON.stringify(payload.itemPayload)
        });
        if(resp.ok){
            const goal = await resp.json();
            
            console.log('Goal successfully added');
            return goal
        }
    }
);

export const deleteGoalAsync = createAsyncThunk('goal/deleteGoalAsync',
    async(payload)=>{
        const resp = await fetch(`${apiUrl}goal/${payload.id}`,{
            method: 'DELETE',
            headers:{'Content-type': 'application/json',
            'x-api-key':apiKey
        },
    });
        if(resp.ok){
            const id=payload.id
            console.log(id);
            return id;
        }
        return false;
    }

)

export const getGoalByIdAsync = createAsyncThunk('exercise/getGoalByIdAsync',
    async(payload)=>{
        const resp = await fetch(`${apiUrl}goal/${payload.id}`,{
            method:'GET',
            headers:{'Content-type':'application/json',
            'x-api-key':apiKey
        }
        });
        if(resp.ok){
            const goal = await resp.json();
            return goal;
        }
    }
)

export const goalSlice = createSlice({
    name: 'goal',
    initialState: {
        name: '',// 'leg day', 'power up', 'run Forest, run'],
        start_date:'',
        end_date:'',
        total_programs: '',
        completed_programs:0,
        complete: false,
        program: [] //array of workout objects
    },
    reducers: {
        // completeGoal: state => {
        //         state.percentage = 0.0
        //         state.isComplete = true
        //         state.completedPrograms += 1
        // },
        // doSomeProgress: state => {
        //     state.isComplete = false
        //     if (state.percentage + 10.0 <= 100.0) state.percentage += 10.0
        // },
        // subtractFromGoal: state => {
        //     if (state.percentage >= 10.0) state.percentage -= 10.0
        // },
        // resetGoal: state => {
        //     if (state.goalName.length - 1 < state.completedPrograms)
        //     state.completedPrograms = 0
        // }
    },
    extraReducers:{
        [getAllGoalsAsync.fulfilled]:(state,action)=>{
            return state=action.payload;
        },
        [updateGoalAsync.fulfilled]:(state,action)=>{
            const goal = action.payload;
            const index = state.findIndex((goalItem)=>goalItem.id===action.payload.id);
            console.log('Updated exercise with index', index);
            console.log(action.payload);
            state[index]=goal;
        },
        [addGoalAsync.fulfilled]:(state,action)=>{
            console.log(action.payload);
            const goal = action.payload;
            state.push(goal);
        },
        [deleteGoalAsync.fulfilled]:(state,action)=>{
            if(action.payload!=false){
                const id = action.payload
                // console.log(id);
                // console.log(state);
                const index = state.findIndex((goalItem)=>goalItem.id===id);
                // console.log(index);
                // if(window.confirm(`Your index is${index} and id is ${id}`))
                //delete state[index];
                const stateLeft = [...state.slice(0,index)];
                const stateRight = [...state.slice(index+1,state.length)]
                state = []
                stateRight.forEach((goal)=>{stateLeft.push(goal)})
                state = [...stateLeft];
                
                console.log('Successfully deleted');
                // console.log(state);
                return state;
            }
            if(action.payload==false){
                console.log('Sth went wrong');
                return
            }
        },
        [getGoalByIdAsync.fulfilled]:(state,action)=>{
            console.log(action.payload);
            console.log(action.payload.goal);
            console.log(state);
            // state.exercise = []
            // state.push(action.payload)
            // state.push(action.payload)
            // state={};
            // state=action.payload;
            console.log(state);
            return action.payload;
        }

    }
})

export const { completeGoal, doSomeProgress, subtractFromGoal, resetGoal } = goalSlice.actions
export default goalSlice.reducer