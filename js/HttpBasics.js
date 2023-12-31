<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
	<div class="lesson-page-wrapper">
		<div class="adoc-content" th:replace="doc:lessons/httpbasics/documentation/HttpBasics_plan.adoc"></div>
	</div>
	<div class="lesson-page-wrapper">
		<div class="adoc-content" th:replace="doc:lessons/httpbasics/documentation/HttpBasics_content1.adoc"></div>
		<div class="attack-container">
			<div class="assignment-success"><i class="fa fa-2 fa-check hidden" aria-hidden="true"></i></div>
			<form class="attack-form" accept-charset="UNKNOWN"
				method="POST" name="form"
				action="/WebGoat/HttpBasics/attack1">
				<div id="lessonContent">
					<form accept-charset="UNKNOWN" method="POST" name="form"
						action="#attack/307/100">
						Enter Your Name: <input name="person" value="" type="TEXT"/><input
							name="SUBMIT" value="Go!" type="SUBMIT"/></form></div>
			</form><div class="attack-feedback"></div><div class="attack-output"></div>
		</div>
	</div>
	<div class="lesson-page-wrapper">
		<div class="adoc-content" th:replace="doc:lessons/httpbasics/documentation/HttpBasics_content2.adoc"></div>
		<div class="attack-container">
			<div class="assignment-success"><i class="fa fa-2 fa-check hidden" aria-hidden="true"></i></div>
				<form class="attack-form" accept-charset="UNKNOWN" 
					method="POST" name="form" action="/WebGoat/HttpBasics/attack2">
					<script>
					    webgoat.customjs.assignRandomVal = function () {
						    	var x = Math.floor((Math.random() * 101) + 1);
						    	var y = Math.floor((Math.random() * 200) + 1);
							document.getElementById("magic_num").value = x;
						};
						webgoat.customjs.assignRandomVal();
					</script>
					<input type="hidden" name="magic_num" id="magic_num" value="foo" />
					<table>
						<tr>
							<td>Was the HTTP command a POST or a GET:</td>
							<td><input name="answer" value="" type="TEXT" /></td>
							<td></td>
						</tr>
						<tr>
							<td>What is the magic number:</td>
							<td><input name="magic_answer" value="" type="TEXT" /><input
								name="SUBMIT" value="Go!" type="SUBMIT" /></td>
							<td></td>
						</tr>
					</table>
				</form>
				<!-- do not remove the two following div's, this is where your feedback/output will land -->
				<div class="attack-feedback"></div>
				<div class="attack-output"></div>
				<!-- ... of course, you can move them if you want to, but that will not look consistent to other lessons -->
		</div>
	</div>

</html>
