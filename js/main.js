/*

Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

1. Вывод на экран всех аудиторий;
2. Вывод на экран аудиторий для указанного факультета;
3. Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия,
  количества студентов и названия факультета;
4. Функция сортировки аудиторий по количеству мест;
5. Функция сортировки аудиторий по названию (по алфавиту).
   https://stackoverflow.com/questions/10198257/comparing-2-strings-alphabetically-for-sorting-purposes

*/

var classes = [
  {
    title: "Class #1",
    places: 13,
    faculty: "Faculty #1"
  },
  {
    title: "Class #2",
    places: 15,
    faculty: "Faculty #1"
  },
  {
    title: "Class #3",
    places: 19,
    faculty: "Faculty #1"
  },
  {
    title: "Class #4",
    places: 10,
    faculty: "Faculty #2"
  },
  {
    title: "Class #5",
    places: 17,
    faculty: "Faculty #2"
  },
  
];

function showClasses(classesArr) {
  for (var classObj of classesArr) {
    //document.write(`<b>${classObj.title}</b>, мест: ${classObj.places}, факультет: ${classObj.faculty}<br />`);

    document.write("| ");
    for (var prop in classObj) {
      document.write(`${prop}: ${classObj[prop]} | `);
    }
    document.write("<br />");
  }
}

// 1
function showAllClasses() {
  showClasses(classes);
}

// 2
function showFacultyClasses(fac) {
  let fClasses = classes.filter((classObj) => {
    return (classObj.faculty == fac);
  });

  showClasses(fClasses);
}

// 3
function showMustGoOn(groupObj) {
  let fClasses = classes.filter((classObj) => {
    /*if (classObj.title != groupObj.class) {
      return false;
    }*/

    return !(classObj.faculty != groupObj.faculty || classObj.places < groupObj.students);
  });

  showClasses(fClasses);
}

// 4
function showSortByPlacesClasses() {
  let fClasses = classes.sort((classObj1, classObj2) => {
    if (classObj1.places > classObj2.places) {
      return -1;
    } else if (classObj1.places < classObj2.places) {
      return 1;
    }

    return 0;
  });

  showClasses(fClasses);
}

//showAllClasses();
//showFacultyClasses("Faculty #1");

let group = {
  class: "Class #2",
  students: 2,
  faculty: "Faculty #1"
}
//showMustGoOn(group);
showSortByPlacesClasses();
