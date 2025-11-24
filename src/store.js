export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
      {
        id: 3,
        title: "Do my homework",
        background: null,
      }
    ],
    saludo: "hola desde el store",
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    //////////////////////////////////////////
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };


    //////////////////////////////////////////////
    case "change_saludo":

      const { message } = action.payload

      return {
        // ...store, saludo: "saludo cambiado desde el dispatch!"
        ...store, saludo: message
      }

    //////////////////////////////////

    case "get_contacts":
      return {

        ...store, constacts: action.payload
      }

    //////////////////////////////////////////////
    default:
      throw Error('Unknown action.');
  }
}
