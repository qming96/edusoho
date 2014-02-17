<?php
namespace Topxia\WebBundle\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Topxia\Service\User\CurrentUser;
use Symfony\Component\ClassLoader\ApcClassLoader;
use Symfony\Component\HttpFoundation\Request;
use Topxia\Service\Common\ServiceKernel;

class QuestionUpgradeCommand extends BaseCommand
{

    protected function configure()
    {
        $this->setName ( 'topxia:question-upgrade' );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $connection = $this->getContainer()->get('database_connection');


        $sql = "ALTER TABLE  `question` ADD  `target` VARCHAR( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT  '' AFTER  `targetType`";
        $connection->executeUpdate($sql);

        $oldQuestions = $connection->fetchAll("select * from question;");

        foreach ($oldQuestions as $oldQuestion) {

            if ($oldQuestion['target'] == 'course'){
                $newQuestion = array(
                    'target' => $oldQuestion['targetType']."-".$oldQuestion['targetId']
                );
            } elseif ($oldQuestion['target'] == 'lesson'){

                $lesson = $connection->fetchAssoc("select * from course_lesson where id = ? ;", array($oldQuestion['targetId']));

                $newQuestion = array(
                    'target' => 'course-'.$lesson['courseId']."/".$oldQuestion['targetType']."-".$oldQuestion['targetId']
                );
            }

            $connection->update('question', $newQuestion);
        }


        $sql = "ALTER TABLE  `question_category` ADD  `target` VARCHAR( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT  '' AFTER  `targetType`";
        $connection->executeUpdate($sql);

        $oldQuestion_categorys = $connection->fetchAll("select * from question_category;");

        foreach ($oldQuestion_categorys as $oldQuestion_category) {

            $newQuestion_category = array(
                'target' => $oldQuestion_category['targetType']."-".$oldQuestion_category['targetId']
            );

            $connection->update('question', $newQuestion_category);
        }



        $sql = "ALTER TABLE  `question_favorite` ADD  `target` VARCHAR( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT  '' AFTER  `targetType`";
        $connection->executeUpdate($sql);

        $oldQuestions = $connection->fetchAll("select * from question_favorite;");

        foreach ($oldQuestions as $oldQuestion) {

            if ($oldQuestion['target'] == 'course'){
                $newQuestion = array(
                    'target' => $oldQuestion['targetType']."-".$oldQuestion['targetId']
                );
            } elseif ($oldQuestion['target'] == 'lesson'){

                $lesson = $connection->fetchAssoc("select * from course_lesson where id = ? ;", array($oldQuestion['targetId']));

                $newQuestion = array(
                    'target' => 'course-'.$lesson['courseId']."/".$oldQuestion['targetType']."-".$oldQuestion['targetId']
                );
            }

            $connection->update('question', $newQuestion);
        }


        $sql = "ALTER TABLE  `testpaper` ADD  `target` VARCHAR( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT  '' AFTER  `targetType`";
        $connection->executeUpdate($sql);

        $oldTestpapers = $connection->fetchAll("select * from testpaper;");

        foreach ($oldTestpapers as $oldTestpaper) {

            $newTestpaper = array(
                'target' => $oldTestpaper['targetType']."-".$oldTestpaper['targetId']
            );

            $connection->update('question', $newTestpaper);
        }


        $sql = "ALTER TABLE  `testpaper_result` ADD  `target` VARCHAR( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT  '' AFTER  `targetType`";
        $connection->executeUpdate($sql);

        $oldTestpaperResults = $connection->fetchAll("select * from testpaper_result;");

        foreach ($oldTestpaperResults as $oldTestpaperResult) {

            if ($oldTestpaperResult['target'] == 'course'){
                $newTestpaperResult = array(
                    'target' => $oldTestpaperResult['targetType']."-".$oldTestpaperResult['targetId']
                );
            } elseif ($oldTestpaperResult['target'] == 'lesson'){

                $lesson = $connection->fetchAssoc("select * from course_lesson where id = ? ;", array($oldTestpaperResult['targetId']));

                $newTestpaperResult = array(
                    'target' => 'course-'.$lesson['courseId']."/".$oldTestpaperResult['targetType']."-".$oldTestpaperResult['targetId']
                );
            }

            $connection->update('question', $newTestpaperResult);
        }

    }

}