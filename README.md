# lecture-20-Part-2-CustomServices
Lecture-20-Part-2-Custom Services
- Controllers are not supported to,
	- Handle business logic.
	- Code sharing.
	- Be used to share data across other components.
- Custom services instantiated with .service methos,
	- Singletons (only 1 instance of object exists).
	- Lazily instantiated (only created if something depends on them).
- .service('name', funtion), treats function as a function constructor.
