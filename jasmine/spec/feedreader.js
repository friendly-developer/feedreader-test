/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

	describe('RSS Feeds', function () {

		it('are defined', function () {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});



		it('have valid URL\'s', function () {
			allFeeds.forEach(function (obj) {
				expect(obj.url).toBeDefined();
				expect(obj.url).not.toBe('');
			});
		});


		it('have valid name\'s', function () {
			allFeeds.forEach(function (obj) {
				expect(obj.name).toBeDefined();
				expect(obj.name).not.toBe('');
			});
		});
	});



	describe('The menu', function () {
		const body = document.body;
		var menuIcon = document.querySelector('.menu-icon-link');


		it('icon is hidden initially', function () {
			expect(body.className).toContain('menu-hidden');
		});


		it('toggles on clicking menu icon', function () {
			menuIcon.click();
			expect(body.className).not.toContain('menu-hidden');

			menuIcon.click();
			expect(body.className).toContain('menu-hidden');
		});

	});


describe('Initial Entries', function (){
	beforeEach(function(done){
		loadFeed(0,function(){
			done();
		})
	});
	/* TODO: Write a test that ensures when the loadFeed
	 * function is called and completes its work, there is at least
	  a single .entry element within the .feed container.
	  */
	 it('has at least a single .entry element within the .feed container', function(done) {
      var numOfEntries = document.querySelector('.feed').getElementsByClassName('entry').length;
      expect(numOfEntries).toBeGreaterThan(0);
      done();
    });

});


	describe('New Feed Selection',function(){
		let firstFeed,newFeed;
		beforeEach(function(done){
		loadFeed(0,function(){
			firstFeed = document.querySelector('.feed').innerHTML;
			loadFeed(1, function() {
          done();
        });
		})
	});
		it('is not equal to first feed', function(done) {
      newFeed = document.querySelector('.feed').innerHTML;
      expect(firstFeed).not.toBe(newFeed);
      done();
    });
	});

	    /* TODO: Write a test that ensures when a new feed is loaded
	     * by the loadFeed function that the content actually changes.
	     * Remember, loadFeed() is asynchronous.
	     */
}());