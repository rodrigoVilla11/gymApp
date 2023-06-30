export default function createExercise(){
  return(
    <div className="flex p-8">
      <div>
        <label>Title<input className="border"/></label>
      </div>
      <div>
        <label>Description<textarea className="border"/></label>
      </div>
      <div>
        <label>Muscles Involved<select className="border">
        <option>Chest</option>
        <option>Back</option>
        <option>Shoulders</option>
        </select>
        </label>
      </div>
          </div>
      )
}
