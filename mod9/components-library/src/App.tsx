import AlertBox from './components/AlertBox';
import Button from './components/Button';
import Section from './components/Section';
import UserProfileCard from './components/UserProfileCard';


function App() {
  const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png'
};
  return (
    <main className='bg-stone-900 text-white h-full p-5'>
      <h1 className='text-4xl'>Components Library</h1>

      <Section title='Section 1'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eius explicabo eligendi corporis id magnam quas quaerat voluptates similique accusantium distinctio quibusdam, fuga blanditiis praesentium. Laborum molestias iste asperiores error.
          </p>
      </Section>

      <Section title='Section 2'>
        <h3>Subheader</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et, saepe voluptatibus, recusandae exercitationem impedit unde expedita error magni nam molestias minus at nisi sequi quaerat excepturi necessitatibus eius quam?
        </p>
      </Section>


      <Section title="Buttons">
        <div className='grid grid-cols-4 gap-2'>

        <Button text='Click me!'/>

        <Button text='Submit' type='submit' onClick={() => console.log('Submit')}/>

        <Button text='Reset' type='reset' onClick={() => console.log('Reset')}/>

        <Button text='Disabled' type='reset' disabled={true} onClick={() => console.log('Disabled')}/>

        </div>
      </Section>

      <Section title="AlertBox">
        <div className='grid gap-2'>

        <AlertBox type='success' message="Confirmed" onClose={() => alert("Closed")}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aut totam quod nulla soluta hic distinctio dignissimos, culpa earum facilis laborum, neque odit doloremque provident repudiandae placeat dolorem adipisci cupiditate!</p>
        </AlertBox>

        <AlertBox type='error' message="Deleted" onClose={() => alert("Deleted")}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aut totam quod nulla soluta hic distinctio dignissimos, culpa earum facilis laborum, neque odit doloremque provident repudiandae placeat dolorem adipisci cupiditate!</p>
        </AlertBox>
        
        <AlertBox type='info' message="Deleted" onClose={() => alert("Deleted")}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aut totam quod nulla soluta hic distinctio dignissimos, culpa earum facilis laborum, neque odit doloremque provident repudiandae placeat dolorem adipisci cupiditate!</p>
        </AlertBox>

        <AlertBox type='warning' message="Deleted" onClose={() => alert("Deleted")}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aut totam quod nulla soluta hic distinctio dignissimos, culpa earum facilis laborum, neque odit doloremque provident repudiandae placeat dolorem adipisci cupiditate!</p>
        </AlertBox>
        </div>
      </Section>



      <Section title='User Profile Cards'>
        <div className='grid grid-cols-2'>

        <UserProfileCard user={user}> </UserProfileCard>
        
        <UserProfileCard user={user} onEdit={() => alert('Show edit')}> </UserProfileCard>

        <UserProfileCard user={user}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, iure nulla tempore officiis non impedit, cupiditate dolore totam doloremque quo nesciunt modi quae vel fugit eius cum obcaecati similique quidem.</p>
        </UserProfileCard>

        </div>
      </Section>


    </main>
  )
}


export default App;